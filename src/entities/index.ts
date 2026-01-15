/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: clientcollaborations
 * Interface for ClientCollaborations
 */
export interface ClientCollaborations {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  clientName?: string;
  /** @wixFieldType text */
  collaborationDescription?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  clientLogo?: string;
  /** @wixFieldType text */
  projectType?: string;
  /** @wixFieldType number */
  collaborationYear?: number;
  /** @wixFieldType url */
  clientWebsiteUrl?: string;
}


/**
 * Collection ID: leadershipbios
 * Interface for LeadershipBios
 */
export interface LeadershipBios {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  name?: string;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  bio?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  photo?: string;
  /** @wixFieldType url */
  linkedinUrl?: string;
  /** @wixFieldType text */
  email?: string;
}


/**
 * Collection ID: services
 * Interface for Services
 */
export interface Services {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  serviceName?: string;
  /** @wixFieldType text */
  serviceCategory?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType text */
  detailedDescription?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  serviceImage?: string;
  /** @wixFieldType url */
  callToActionUrl?: string;
}
