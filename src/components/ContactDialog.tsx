import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { X, CheckCircle } from 'lucide-react';

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactDialog({ isOpen, onClose }: ContactDialogProps) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      // Validate inputs
      if (!email.trim() || !message.trim()) {
        setError('Please fill in all fields');
        setIsSubmitting(false);
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError('Please enter a valid email address');
        setIsSubmitting(false);
        return;
      }

      // Submit to backend
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          message: message.trim(),
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit contact form');
      }

      // Show success message
      setIsSuccess(true);
      setEmail('');
      setMessage('');

      // Close dialog after 2 seconds
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setEmail('');
      setMessage('');
      setError('');
      setIsSuccess(false);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="w-full max-w-md mx-auto p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={handleClose}
          disabled={isSubmitting}
          className="absolute right-4 top-4 text-foreground hover:text-gold-accent transition-colors disabled:opacity-50"
        >
          <X size={24} />
        </button>

        {isSuccess ? (
          // Success State
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <CheckCircle size={48} className="text-gold-accent mb-4" />
            <h2 className="font-heading text-2xl text-primary mb-2">Thank You!</h2>
            <p className="font-paragraph text-base text-secondary">
              Your message has been received. We'll get back to you soon.
            </p>
          </div>
        ) : (
          // Form State
          <>
            <DialogHeader>
              <DialogTitle className="font-heading text-2xl text-primary">
                Get in Touch
              </DialogTitle>
              <DialogDescription className="font-paragraph text-base text-secondary mt-2">
                Send us a message and we'll respond as soon as possible.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6 mt-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="font-paragraph text-sm font-medium text-foreground">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="font-paragraph text-base border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent disabled:opacity-50"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="font-paragraph text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us how we can help..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={isSubmitting}
                  rows={5}
                  className="font-paragraph text-base border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent resize-none disabled:opacity-50"
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded">
                  <p className="font-paragraph text-sm text-red-700">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white font-paragraph text-base py-3 rounded hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
