import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type Address = {
  __typename?: 'Address';
  /** Colony */
  colony?: Maybe<Scalars['String']>;
  /** Country */
  country?: Maybe<Scalars['String']>;
  /** Municipality */
  municipality?: Maybe<Scalars['String']>;
  /** Number (interior and exterior) */
  number?: Maybe<AddressNumber>;
  /** State */
  state?: Maybe<Scalars['String']>;
  /** Street */
  street?: Maybe<Scalars['String']>;
  /** Between which streets is it located (a and b) */
  streets?: Maybe<AddressStreets>;
  /** Postal code */
  zipCode?: Maybe<Scalars['Int']>;
};

export type AddressInput = {
  /** Colony */
  colony: Scalars['String'];
  /** Country */
  country: Scalars['String'];
  /** Municipality */
  municipality: Scalars['String'];
  /** Number (interior and exterior) */
  number: AddressNumberInput;
  /** State */
  state: Scalars['String'];
  /** Street */
  street: Scalars['String'];
  /** Between which streets is it located (a and b) */
  streets?: InputMaybe<AddressStreetsInput>;
  /** Postal code */
  zipCode: Scalars['Int'];
};

export type AddressNumber = {
  __typename?: 'AddressNumber';
  exterior?: Maybe<Scalars['String']>;
  interior?: Maybe<Scalars['String']>;
};

export type AddressNumberInput = {
  exterior: Scalars['String'];
  interior?: InputMaybe<Scalars['String']>;
};

export type AddressStreets = {
  __typename?: 'AddressStreets';
  a?: Maybe<Scalars['String']>;
  b?: Maybe<Scalars['String']>;
};

export type AddressStreetsInput = {
  a?: InputMaybe<Scalars['String']>;
  b?: InputMaybe<Scalars['String']>;
};

export type ContactPersonalized = {
  __typename?: 'ContactPersonalized';
  /** Contact email */
  email?: Maybe<Scalars['String']>;
  /** Contact name */
  name?: Maybe<Scalars['String']>;
  /** Contact phone */
  phone?: Maybe<Scalars['String']>;
  /** Job position */
  position?: Maybe<Scalars['String']>;
  /** Title of the person */
  title?: Maybe<PersonalizedTitleEnum>;
};

export type ContactPersonalizedInput = {
  /** Contact email */
  email: Scalars['String'];
  /** Contact name */
  name: Scalars['String'];
  /** Contact phone */
  phone?: InputMaybe<Scalars['String']>;
  /** Job position */
  position?: InputMaybe<Scalars['String']>;
  /** Title of the person */
  title?: InputMaybe<PersonalizedTitleEnum>;
};

/** Purpose of contact */
export enum ContactWorkPositionEnum {
  Compras = 'COMPRAS',
  Desarrollador = 'DESARROLLADOR',
  Gerente = 'GERENTE',
  Mercadotecnia = 'MERCADOTECNIA',
  Otros = 'OTROS',
  RecursosHumanos = 'RECURSOS_HUMANOS',
  Sistemas = 'SISTEMAS',
  Ventas = 'VENTAS'
}

export type CustomerContact = {
  __typename?: 'CustomerContact';
  /** Provider email */
  email?: Maybe<Scalars['String']>;
  /** Personalized contacts */
  personalizedContact?: Maybe<Array<Maybe<ContactPersonalized>>>;
  /** Provider phone */
  phone?: Maybe<Scalars['String']>;
  /** Provider website */
  web?: Maybe<Scalars['String']>;
};

export type CustomerContactInput = {
  /** Provider email */
  email: Scalars['String'];
  /** Personalized contacts */
  personalizedContact?: InputMaybe<Array<InputMaybe<ContactPersonalizedInput>>>;
  /** Provider phone */
  phone: Scalars['String'];
  /** Provider website */
  web?: InputMaybe<Scalars['String']>;
};

export type Details = {
  __typename?: 'Details';
  /** Creation date */
  creationDate?: Maybe<Scalars['String']>;
  creatorUser?: Maybe<User>;
  /** Creator user of item */
  creatorUserId?: Maybe<Scalars['String']>;
  /** Last modification */
  lastModification?: Maybe<Scalars['String']>;
  /** Last modification */
  modifierUserId?: Maybe<User>;
  /** Availability */
  status?: Maybe<Scalars['Boolean']>;
};

export type DetailsInput = {
  /** Creation date of item */
  creationDate?: InputMaybe<Scalars['String']>;
  /** Creator user of item */
  creatorUserId?: InputMaybe<Scalars['String']>;
  /** Last modification */
  modifierUserId?: InputMaybe<Scalars['String']>;
  /** Availability */
  status?: InputMaybe<Scalars['Boolean']>;
};

export type Image = {
  __typename?: 'Image';
  height?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type JobSchedule = {
  __typename?: 'JobSchedule';
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
};

export type JobScheduleInput = {
  from: Scalars['String'];
  to: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** New contact */
  addContact?: Maybe<RrhhContactResult>;
  /** New customer */
  addCustomer?: Maybe<SaleCustomerResult>;
  /** New permission */
  addPermission?: Maybe<RrhhPermissionResult>;
  /** New product */
  addProduct?: Maybe<PurchaseProductResult>;
  /** New requisition */
  addRequisition?: Maybe<PurchaseRequisitionResult>;
  /** New supplier */
  addSupplier?: Maybe<PurchaseSupplierResult>;
  /** New vacant */
  addVacant?: Maybe<RrhhVacantResult>;
  /** New work area */
  addWorkArea?: Maybe<RrhhWorkAreaResult>;
  /** Delete contact */
  deleteContact?: Maybe<RrhhContactResult>;
  /** Delete customer */
  deleteCustomer?: Maybe<SaleCustomerResult>;
  /** Delete permission */
  deletePermission?: Maybe<RrhhPermissionResult>;
  /** Delete product */
  deleteProduct?: Maybe<PurchaseProductResult>;
  /** Delete requisition */
  deleteRequisition?: Maybe<PurchaseRequisitionResult>;
  /** Delete supplier */
  deleteSupplier?: Maybe<PurchaseSupplierResult>;
  /** Delete user */
  deleteUser?: Maybe<ResultUser>;
  /** Delete vacant */
  deleteVacant?: Maybe<RrhhVacantResult>;
  /** Delete work area */
  deleteWorkArea?: Maybe<RrhhWorkAreaResult>;
  /** Login user */
  login?: Maybe<ResultLogin>;
  /** register users */
  register?: Maybe<ResultUser>;
  /** Update contact */
  updateContact?: Maybe<RrhhContactResult>;
  /** Update customer */
  updateCustomer?: Maybe<SaleCustomerResult>;
  /** Update permission */
  updatePermission?: Maybe<RrhhPermissionResult>;
  /** Update product */
  updateProduct?: Maybe<PurchaseProductResult>;
  /** Update requisition */
  updateRequisition?: Maybe<PurchaseRequisitionResult>;
  /** Update supplier */
  updateSupplier?: Maybe<PurchaseSupplierResult>;
  /** Update user */
  updateUser?: Maybe<ResultUser>;
  /** Update vacant */
  updateVacant?: Maybe<RrhhVacantResult>;
  /** Update work area */
  updateWorkArea?: Maybe<RrhhWorkAreaResult>;
};


export type MutationAddContactArgs = {
  contact: RrhhContactInput;
};


export type MutationAddCustomerArgs = {
  customer: SaleCustomerInput;
};


export type MutationAddPermissionArgs = {
  permission: RrhhPermissionInput;
};


export type MutationAddProductArgs = {
  product: PurchaseProductInput;
};


export type MutationAddRequisitionArgs = {
  requisition: PurchaseRequisitionInput;
};


export type MutationAddSupplierArgs = {
  supplier: PurchaseSupplierInput;
};


export type MutationAddVacantArgs = {
  vacant: RrhhVacantInput;
};


export type MutationAddWorkAreaArgs = {
  workArea: RrhhWorkAreaInput;
};


export type MutationDeleteContactArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCustomerArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePermissionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRequisitionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSupplierArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteVacantArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteWorkAreaArgs = {
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  user: UserInput;
};


export type MutationUpdateContactArgs = {
  contact: RrhhContactInput;
  id: Scalars['ID'];
};


export type MutationUpdateCustomerArgs = {
  customer: SaleCustomerInput;
  id: Scalars['ID'];
};


export type MutationUpdatePermissionArgs = {
  id: Scalars['ID'];
  permission: RrhhPermissionInput;
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID'];
  product: PurchaseProductInput;
};


export type MutationUpdateRequisitionArgs = {
  id: Scalars['ID'];
  requisition: PurchaseRequisitionInput;
};


export type MutationUpdateSupplierArgs = {
  id: Scalars['ID'];
  supplier: PurchaseSupplierInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  user: UserInput;
};


export type MutationUpdateVacantArgs = {
  id: Scalars['ID'];
  vacant: UserInput;
};


export type MutationUpdateWorkAreaArgs = {
  id: Scalars['ID'];
  workArea: RrhhWorkAreaInput;
};

/** Permission types */
export enum PermissionTypePermissionEnum {
  Ausencia = 'AUSENCIA',
  CambioTurno = 'CAMBIO_TURNO',
  Falta = 'FALTA',
  LlegarTarde = 'LLEGAR_TARDE',
  Retirarse = 'RETIRARSE'
}

export enum PersonalizedTitleEnum {
  Ing = 'Ing',
  Lic = 'Lic',
  Mtr = 'Mtr',
  Mtro = 'Mtro',
  PhD = 'PhD',
  Sr = 'Sr',
  Sra = 'Sra',
  Undefined = 'undefined'
}

export type ProductType = {
  __typename?: 'ProductType';
  /** Service description */
  description?: Maybe<Scalars['String']>;
  /** Enum for service type */
  type?: Maybe<ProductTypeEnum>;
};

/** Type of product/service */
export enum ProductTypeEnum {
  Producto = 'PRODUCTO',
  Servicio = 'SERVICIO'
}

export type ProductTypeInput = {
  /** Service description */
  description?: InputMaybe<Scalars['String']>;
  /** Enum for service type */
  type?: InputMaybe<ProductTypeEnum>;
};

export type PurchaseProduct = {
  __typename?: 'PurchaseProduct';
  /** Auditable product/service */
  audited: Scalars['Boolean'];
  /** Brand */
  brand?: Maybe<Scalars['String']>;
  /** Description of the product/service */
  description?: Maybe<Scalars['String']>;
  /** Item details */
  details: Details;
  id: Scalars['ID'];
  /** Name of the product/service */
  name: Scalars['String'];
  /** Supplier */
  supplierId: PurchaseSupplier;
  /** If it is a service, what type of service */
  type?: Maybe<ProductType>;
};

export type PurchaseProductInput = {
  /** Auditable product/service */
  audited: Scalars['Boolean'];
  /** Brand */
  brand?: InputMaybe<Scalars['String']>;
  /** Description of the product/service */
  description?: InputMaybe<Scalars['String']>;
  /** Item creator and modifier details */
  details?: InputMaybe<DetailsInput>;
  /** Name of the product/service */
  name: Scalars['String'];
  /** Supplier */
  supplierId: Scalars['String'];
  /** If it is a service, what type of service */
  type?: InputMaybe<ProductTypeInput>;
};

export type PurchaseProductResult = Result & {
  __typename?: 'PurchaseProductResult';
  /** Operation message */
  message: Scalars['String'];
  /** Product */
  product?: Maybe<PurchaseProduct>;
  /** Operation status */
  status: Scalars['Boolean'];
};

export type PurchaseProductsResult = Result & {
  __typename?: 'PurchaseProductsResult';
  /** Operation message */
  message: Scalars['String'];
  /** List of Products */
  products?: Maybe<Array<PurchaseProduct>>;
  /** Operation status */
  status: Scalars['Boolean'];
};

export type PurchaseRequisition = {
  __typename?: 'PurchaseRequisition';
  /** If it was authorized */
  autorization?: Maybe<Scalars['Boolean']>;
  /** Item creator and modifier details */
  details: Details;
  id: Scalars['ID'];
  /** Product */
  product?: Maybe<Array<Maybe<RequisitionProduct>>>;
  /** Requesting user */
  userId?: Maybe<User>;
};

export type PurchaseRequisitionInput = {
  /** Item creator and modifier details */
  details?: InputMaybe<DetailsInput>;
  /** Product */
  product?: InputMaybe<Array<RequisitionProductInput>>;
  /** Requesting user */
  userId: Scalars['String'];
};

export type PurchaseRequisitionResult = Result & {
  __typename?: 'PurchaseRequisitionResult';
  /** Operation message */
  message: Scalars['String'];
  /** Requisition */
  requisition?: Maybe<PurchaseRequisition>;
  /** Operation status */
  status: Scalars['Boolean'];
};

export type PurchaseRequisitionsResult = Result & {
  __typename?: 'PurchaseRequisitionsResult';
  /** Operation message */
  message: Scalars['String'];
  /** List of Requisitions */
  requisitions?: Maybe<Array<PurchaseRequisition>>;
  /** Operation status */
  status: Scalars['Boolean'];
};

export type PurchaseSupplier = {
  __typename?: 'PurchaseSupplier';
  /** Address */
  address?: Maybe<Address>;
  /** Classification */
  classification?: Maybe<SupplierClassificationEnum>;
  /** Approximate delivery time */
  deliveryTime?: Maybe<Scalars['Int']>;
  /** Item creator and modifier details */
  details: Details;
  id: Scalars['ID'];
  /** Contact information */
  infoContact?: Maybe<SupplierContact>;
  /** Logo */
  logo?: Maybe<Image>;
  /** Supplier name */
  name: Scalars['String'];
  /** Approved */
  passed?: Maybe<Scalars['Boolean']>;
  /** List of your products */
  productId?: Maybe<Array<Maybe<PurchaseProduct>>>;
  /** RFC */
  taxes?: Maybe<SupplierTaxes>;
};

export type PurchaseSupplierInput = {
  /** Address */
  address: AddressInput;
  /** Classification */
  classification: SupplierClassificationEnum;
  /** Approximate delivery time */
  deliveryTime?: InputMaybe<Scalars['Int']>;
  /** Item creator and modifier details */
  details?: InputMaybe<DetailsInput>;
  /** Contact information */
  infoContact: SupplierContactInput;
  /** Logo */
  logo?: InputMaybe<Scalars['Upload']>;
  /** Supplier name */
  name: Scalars['String'];
  /** Approved */
  passed: Scalars['Boolean'];
  /** RFC */
  taxes: SupplierTaxesInput;
};

export type PurchaseSupplierResult = Result & {
  __typename?: 'PurchaseSupplierResult';
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
  /** Supplier */
  supplier?: Maybe<PurchaseSupplier>;
};

export type PurchaseSuppliersResult = Result & {
  __typename?: 'PurchaseSuppliersResult';
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
  /** List of Suppliers */
  suppliers?: Maybe<Array<PurchaseSupplier>>;
};

export type Query = {
  __typename?: 'Query';
  /** Show item contact */
  contact?: Maybe<RrhhContactResult>;
  /** Show list of contacts */
  contacts?: Maybe<RrhhContactsResult>;
  /** Show item customer */
  customer?: Maybe<SaleCustomerResult>;
  /** Show list of customers */
  customers?: Maybe<SaleCustomersResult>;
  /** Token Authentication */
  me?: Maybe<ResultUser>;
  /** Show item permission */
  permission?: Maybe<RrhhPermissionResult>;
  /** Show list of permissions */
  permissions?: Maybe<RrhhPermissionsResult>;
  /** Show item product */
  product?: Maybe<PurchaseProductResult>;
  /** Show list of products */
  products?: Maybe<PurchaseProductsResult>;
  /** Show item requisition */
  requisition?: Maybe<PurchaseRequisitionResult>;
  /** Show list of suppliers */
  requisitions?: Maybe<PurchaseRequisitionsResult>;
  /** Show item supplier */
  supplier?: Maybe<PurchaseSupplierResult>;
  /** Show list of suppliers */
  suppliers?: Maybe<PurchaseSuppliersResult>;
  /** List of registered users */
  users?: Maybe<ResultUsers>;
  /** Show item vacant */
  vacant?: Maybe<RrhhVacantResult>;
  /** Show list of vacants */
  vacants?: Maybe<RrhhVacantsResult>;
  /** Show item work area */
  workArea?: Maybe<RrhhWorkAreaResult>;
  /** Show list of work areas */
  workAreas?: Maybe<RrhhWorkAreasResult>;
};


export type QueryContactArgs = {
  id: Scalars['ID'];
};


export type QueryContactsArgs = {
  itemsPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCustomerArgs = {
  id: Scalars['ID'];
};


export type QueryCustomersArgs = {
  itemsPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryPermissionArgs = {
  id: Scalars['ID'];
};


export type QueryPermissionsArgs = {
  itemsPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type QueryProductsArgs = {
  itemsPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryRequisitionArgs = {
  id: Scalars['ID'];
};


export type QueryRequisitionsArgs = {
  itemsPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QuerySupplierArgs = {
  id: Scalars['ID'];
};


export type QuerySuppliersArgs = {
  itemsPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryUsersArgs = {
  itemsPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryVacantArgs = {
  id: Scalars['ID'];
};


export type QueryVacantsArgs = {
  itemsPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryWorkAreaArgs = {
  id: Scalars['ID'];
};


export type QueryWorkAreasArgs = {
  itemsPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

/** Product Quantity */
export enum RequisitionAmountOfEnum {
  Kg = 'KG',
  Lts = 'LTS',
  Pz = 'PZ'
}

export type RequisitionProduct = {
  __typename?: 'RequisitionProduct';
  /** Quantity */
  number?: Maybe<Scalars['Int']>;
  /** Product */
  productId?: Maybe<PurchaseProduct>;
  /** Quantity type */
  type?: Maybe<RequisitionAmountOfEnum>;
};

export type RequisitionProductInput = {
  /** Quantity */
  number: Scalars['Int'];
  /** Product */
  productId?: InputMaybe<Scalars['String']>;
  /** Quantity type */
  type: RequisitionAmountOfEnum;
};

/** Interface to specify the required properties in the response */
export type Result = {
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
};

export type ResultInfo = {
  __typename?: 'ResultInfo';
  /** Number of documents per page */
  itemsPage: Scalars['Int'];
  /** Selected page */
  page: Scalars['Int'];
  /** Pages containing the result */
  pages: Scalars['Int'];
  /** Total number of documents corresponding to the collection */
  total: Scalars['Int'];
};

export type ResultLogin = Result & {
  __typename?: 'ResultLogin';
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
  /** Logged user token information */
  token?: Maybe<Scalars['String']>;
};

export type ResultUser = Result & {
  __typename?: 'ResultUser';
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
  /** Get user */
  user?: Maybe<User>;
};

export type ResultUsers = Result & {
  __typename?: 'ResultUsers';
  /** Show paging system information */
  info?: Maybe<ResultInfo>;
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
  /** List of registered users */
  users?: Maybe<Array<User>>;
};

/** Interface to specify the required properties in the response */
export type RrhhContact = {
  /** Contact status */
  attended: Scalars['Boolean'];
  creationDate: Scalars['String'];
  /** Contact email */
  email: Scalars['String'];
  /** Contact name */
  name: Scalars['String'];
  /** Contact phone */
  phone: Scalars['String'];
};

/** Contact input for vacancies or sales */
export type RrhhContactInput = {
  /** Contact age */
  age?: InputMaybe<Scalars['String']>;
  /** Contact status */
  attended?: InputMaybe<Scalars['Boolean']>;
  /** Contact company */
  company?: InputMaybe<Scalars['String']>;
  creationDate?: InputMaybe<Scalars['String']>;
  /** Contact email */
  email: Scalars['String'];
  /** Contact message */
  message?: InputMaybe<Scalars['String']>;
  /** Contact name */
  name: Scalars['String'];
  /** Contact phone */
  phone: Scalars['String'];
  /** Unique identifier of a vacancy */
  vacantId?: InputMaybe<Scalars['ID']>;
  /** Contact work position */
  workPosition?: InputMaybe<ContactWorkPositionEnum>;
};

export type RrhhContactResult = Result & {
  __typename?: 'RrhhContactResult';
  /** Contact */
  contact?: Maybe<RrhhContact>;
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
};

/** Type of object to contact the company. */
export type RrhhContactRrhh = RrhhContact & {
  __typename?: 'RrhhContactRrhh';
  /** Contact age */
  age?: Maybe<Scalars['String']>;
  /** Contact status */
  attended: Scalars['Boolean'];
  creationDate: Scalars['String'];
  /** Contact email */
  email: Scalars['String'];
  /** Unique identifier */
  id?: Maybe<Scalars['ID']>;
  /** Contact name */
  name: Scalars['String'];
  /** Contact phone */
  phone: Scalars['String'];
  /** Unique identifier of a vacancy */
  vacantId?: Maybe<RrhhVacant>;
};

export type RrhhContactSales = RrhhContact & {
  __typename?: 'RrhhContactSales';
  /** Contact status */
  attended: Scalars['Boolean'];
  /** Contact company */
  company?: Maybe<Scalars['String']>;
  creationDate: Scalars['String'];
  /** Contact email */
  email: Scalars['String'];
  /** Unique identifier */
  id?: Maybe<Scalars['ID']>;
  /** Contact message */
  message?: Maybe<Scalars['String']>;
  /** Contact name */
  name: Scalars['String'];
  /** Contact phone */
  phone: Scalars['String'];
  /** Contact work position */
  workPosition?: Maybe<ContactWorkPositionEnum>;
};

export type RrhhContactsResult = Result & {
  __typename?: 'RrhhContactsResult';
  /** List of Contacts */
  contacts?: Maybe<Array<RrhhContact>>;
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
};

/** Type of object to make permission requests. */
export type RrhhPermission = {
  __typename?: 'RrhhPermission';
  /** Permit authorization */
  authorization: Scalars['Boolean'];
  /** Item details */
  details: Details;
  /** From what time */
  from: Scalars['String'];
  /** Unique identifier */
  id: Scalars['ID'];
  /** Reason for permission */
  reason: Scalars['String'];
  /** Until what time? */
  to: Scalars['String'];
  /** Permit type */
  type: PermissionTypePermissionEnum;
  /** Requesting user */
  userId: User;
};

/** Input for the registration of user data */
export type RrhhPermissionInput = {
  /** Item creator and modifier details */
  details?: InputMaybe<DetailsInput>;
  /** From what time */
  from: Scalars['String'];
  /** Reason for permission */
  reason: Scalars['String'];
  /** Until what time? */
  to: Scalars['String'];
  /** Permit type */
  type: PermissionTypePermissionEnum;
  /** Requesting user */
  userId: Scalars['ID'];
};

export type RrhhPermissionResult = Result & {
  __typename?: 'RrhhPermissionResult';
  /** Operation message */
  message: Scalars['String'];
  /** Permission */
  permission?: Maybe<RrhhPermission>;
  /** Operation status */
  status: Scalars['Boolean'];
};

export type RrhhPermissionsResult = Result & {
  __typename?: 'RrhhPermissionsResult';
  /** Operation message */
  message: Scalars['String'];
  /** List of Permissions */
  permissions?: Maybe<Array<RrhhPermission>>;
  /** Operation status */
  status: Scalars['Boolean'];
};

/** Type of object to vacants. */
export type RrhhVacant = {
  __typename?: 'RrhhVacant';
  /** Vacant available */
  available: VacantAvailable;
  /** Vacant description */
  description: VacantDescription;
  /** Item details */
  details: Details;
  /** Unique identifier */
  id?: Maybe<Scalars['ID']>;
  /** Vacant name */
  title: Scalars['String'];
  /** Unique identifier of a Work area */
  workAreaId: RrhhWorkArea;
};

/** Vacant input */
export type RrhhVacantInput = {
  /** Vacant available */
  available: VacantAvailableInput;
  /** Vacant description */
  description: VacantDescriptionInput;
  /** Item creator and modifier details */
  details?: InputMaybe<DetailsInput>;
  /** Vacant title */
  title: Scalars['String'];
  /** Unique identifier of a Work area */
  workAreaId: Scalars['String'];
};

export type RrhhVacantResult = Result & {
  __typename?: 'RrhhVacantResult';
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
  /** Vacant */
  vacant?: Maybe<RrhhVacant>;
};

export type RrhhVacantsResult = Result & {
  __typename?: 'RrhhVacantsResult';
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
  /** List of Vacants */
  vacants?: Maybe<Array<RrhhVacant>>;
};

export type RrhhWorkArea = {
  __typename?: 'RrhhWorkArea';
  /** Work area description */
  description?: Maybe<Scalars['String']>;
  /** Item details */
  details: Details;
  /** Unique identifier */
  id?: Maybe<Scalars['ID']>;
  /** Work area image */
  image?: Maybe<Image>;
  /** Work area title */
  title: Scalars['String'];
};

/** Job input */
export type RrhhWorkAreaInput = {
  /** Job description */
  description: Scalars['String'];
  /** Item creator and modifier details */
  details?: InputMaybe<DetailsInput>;
  /** Job image */
  image: Scalars['Upload'];
  /** Job title */
  title: Scalars['String'];
};

export type RrhhWorkAreaResult = Result & {
  __typename?: 'RrhhWorkAreaResult';
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
  /** Work area */
  workArea?: Maybe<RrhhWorkArea>;
};

export type RrhhWorkAreasResult = Result & {
  __typename?: 'RrhhWorkAreasResult';
  /** Show paging system information */
  info?: Maybe<ResultInfo>;
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
  /** List of Work areas */
  workAreas?: Maybe<Array<RrhhWorkArea>>;
};

export type SaleCustomer = {
  __typename?: 'SaleCustomer';
  /** Item details */
  details: Details;
  /** Unique identifier */
  id?: Maybe<Scalars['ID']>;
  /** Contact information */
  infoContact?: Maybe<CustomerContact>;
  /** Customer logo */
  logo?: Maybe<Scalars['String']>;
  /** Customer name */
  name: Scalars['String'];
};

export type SaleCustomerInput = {
  /** Item creator and modifier details */
  details?: InputMaybe<DetailsInput>;
  /** Contact information */
  infoContact: CustomerContactInput;
  /** Customer logo */
  logo: Scalars['String'];
  /** Customer name */
  name: Scalars['String'];
};

export type SaleCustomerResult = Result & {
  __typename?: 'SaleCustomerResult';
  /** Customer */
  customer?: Maybe<SaleCustomer>;
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
};

export type SaleCustomersResult = Result & {
  __typename?: 'SaleCustomersResult';
  /** List of Customers */
  customers?: Maybe<Array<SaleCustomer>>;
  /** Operation message */
  message: Scalars['String'];
  /** Operation status */
  status: Scalars['Boolean'];
};

/** Provider Classification */
export enum SupplierClassificationEnum {
  A = 'A',
  B = 'B',
  C = 'C'
}

export type SupplierContact = {
  __typename?: 'SupplierContact';
  /** Provider email */
  email?: Maybe<Scalars['String']>;
  /** Personalized contacts */
  personalizedContact?: Maybe<Array<Maybe<ContactPersonalized>>>;
  /** Provider phone */
  phone?: Maybe<Scalars['String']>;
  /** Provider website */
  web?: Maybe<Scalars['String']>;
};

export type SupplierContactInput = {
  /** Provider email */
  email: Scalars['String'];
  /** Personalized contacts */
  personalizedContact?: InputMaybe<Array<InputMaybe<ContactPersonalizedInput>>>;
  /** Provider phone */
  phone: Scalars['String'];
  /** Provider website */
  web?: InputMaybe<Scalars['String']>;
};

export type SupplierTaxes = {
  __typename?: 'SupplierTaxes';
  /** Your RFC if direct */
  rfc?: Maybe<Scalars['String']>;
  /** Direct/indirect */
  type?: Maybe<SupplierTypeTaxesEnum>;
};

export type SupplierTaxesInput = {
  /** Your RFC if direct */
  rfc?: InputMaybe<Scalars['String']>;
  /** Direct/indirect */
  type: SupplierTypeTaxesEnum;
};

/** If it shows RFC */
export enum SupplierTypeTaxesEnum {
  Directo = 'DIRECTO',
  Indirecto = 'INDIRECTO'
}

export type User = {
  __typename?: 'User';
  address?: Maybe<Address>;
  avatar?: Maybe<Image>;
  birthday?: Maybe<Scalars['String']>;
  curp: Scalars['String'];
  /** Item details */
  details: Details;
  /** Account */
  email: Scalars['String'];
  gender: UserGenderEnum;
  /** Unique identifier */
  id: Scalars['ID'];
  infonavitCredit?: Maybe<Scalars['Boolean']>;
  job?: Maybe<UserJob>;
  lastSession: Scalars['String'];
  lastname: Scalars['String'];
  maritalStatus: UserMaritalStatusEnum;
  /** Personal information */
  name: Scalars['String'];
  nss?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  /** Employment information */
  rfc?: Maybe<Scalars['String']>;
  role: UserRoleEnum;
  schooling: UserSchoolingEnum;
};

export enum UserGenderEnum {
  Hombre = 'HOMBRE',
  Mujer = 'MUJER',
  Otro = 'OTRO'
}

/** Input for the registration of user data */
export type UserInput = {
  address?: InputMaybe<AddressInput>;
  avatar?: InputMaybe<Scalars['Upload']>;
  birthday: Scalars['String'];
  curp: Scalars['String'];
  /** Item creator and modifier details */
  details?: InputMaybe<DetailsInput>;
  /** Account */
  email: Scalars['String'];
  gender: UserGenderEnum;
  infonavitCredit?: InputMaybe<Scalars['Boolean']>;
  job?: InputMaybe<UserJobInput>;
  lastSession?: InputMaybe<Scalars['String']>;
  lastname: Scalars['String'];
  maritalStatus: UserMaritalStatusEnum;
  /** Personal information */
  name: Scalars['String'];
  nss?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  /** Employment information */
  rfc?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<UserRoleEnum>;
  schooling: UserSchoolingEnum;
};

export type UserJob = {
  __typename?: 'UserJob';
  accountNumber?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  salary?: Maybe<Scalars['String']>;
  schedule?: Maybe<JobSchedule>;
  workAreaId: RrhhWorkArea;
};

export type UserJobInput = {
  accountNumber: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  salary?: InputMaybe<Scalars['String']>;
  schedule: JobScheduleInput;
  workAreaId: Scalars['String'];
};

export enum UserMaritalStatusEnum {
  Casado = 'CASADO',
  Divorciado = 'DIVORCIADO',
  Soltero = 'SOLTERO',
  UnionLibre = 'UNION_LIBRE',
  Viudo = 'VIUDO'
}

/** User types */
export enum UserRoleEnum {
  Admin = 'ADMIN',
  User = 'USER'
}

export enum UserSchoolingEnum {
  Bachillerato = 'BACHILLERATO',
  Ingenieria = 'INGENIERIA',
  Licenciatura = 'LICENCIATURA',
  Maestria = 'MAESTRIA',
  Postgrado = 'POSTGRADO',
  Primaria = 'PRIMARIA',
  Secundaria = 'SECUNDARIA',
  Tecnica = 'TECNICA'
}

export type VacantAvailable = {
  __typename?: 'VacantAvailable';
  available?: Maybe<Scalars['Boolean']>;
  candidates: Scalars['Int'];
  date: Scalars['String'];
};

export type VacantAvailableInput = {
  available?: InputMaybe<Scalars['Boolean']>;
  candidates: Scalars['Int'];
  date: Scalars['String'];
};

export type VacantDescription = {
  __typename?: 'VacantDescription';
  benefits?: Maybe<Array<Maybe<Scalars['String']>>>;
  description: Array<Maybe<Scalars['String']>>;
  salary?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Int']>;
};

export type VacantDescriptionInput = {
  benefits?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description: Array<Scalars['String']>;
  salary?: InputMaybe<Scalars['Int']>;
  time?: InputMaybe<Scalars['Int']>;
};

export type GetWorkAreasQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWorkAreasQuery = { __typename?: 'Query', workAreas?: { __typename?: 'RrhhWorkAreasResult', status: boolean, message: string, workAreas?: Array<{ __typename?: 'RrhhWorkArea', id?: string | null, title: string, description?: string | null, details: { __typename?: 'Details', status?: boolean | null, creatorUserId?: string | null, creatorUser?: { __typename?: 'User', name: string } | null } }> | null } | null };


export const GetWorkAreasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWorkAreas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workAreas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"workAreas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"creatorUserId"}},{"kind":"Field","name":{"kind":"Name","value":"creatorUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetWorkAreasQuery, GetWorkAreasQueryVariables>;