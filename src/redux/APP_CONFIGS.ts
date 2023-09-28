// type EndpointCreator = (...args: any[]) => string;
export enum AppPagesEnum {
  companies = 'companies',
  transactions = 'transactions',
  orders = 'orders',
  refunds = 'refunds',
  supplement = 'supplement',
  products = 'products',
  dashboard = 'dashboard',
  storage = 'storage',
  manager = 'manager',
  admin = 'admin',
  warehouses = 'warehouses',
  notFound = 'notFound',
  documentsFlow = 'documentsFlow',
  priceLists = 'priceLists',
  director = 'director',
}

export type PagePathType = keyof typeof AppPagesEnum | AppPagesEnum;
export enum API_BASE_ROUTES {
  APP = 'APP',
  AUTH = '/auth',
  PERMISSIONS = '/permissions',
  COMPANIES = '/companies',
  DIRECTORIES = '/directories',
  TRANSACTIONS = `/transactions`,
  CUSTOM_ROLES = '/roles',
  PRODUCTS = '/products',
  PROPERTIES = '/products/properties',
  VARIATIONS = '/products/variations',
  ORDERS = '/orders',
  REFUNDS = '/refunds',
  PRICE_MANAGEMENT = '/priceManagement',
  WAREHOUSES = '/warehouses',
  PAYMENTS = '/payments',
}

export enum Endpoints {
  getAll = 'getAll',
  getAllByProductId = 'getAllByProductId',
  getAllByWarehouseId = 'getAllByWarehouseId',
  getAllByType = 'getAllByType',
  getAllGrouped = 'getAllGrouped',
  create = 'create',
  update = 'update',
  delete = 'delete',
  deleteById = 'deleteById',
  updateById = 'updateById',
  getById = 'getById',
  getFullInfoById = 'getFullInfoById',
  getCurrent = 'getCurrent',
  register = 'register',
  logOut = 'logOut',
  logIn = 'logIn',
  getAllByUserId = 'getAllByUserId',
  getAllByCompanyId = 'getAllByCompanyId',
  getAllByOwnerId = 'getAllByOwnerId',
  rejectById = 'rejectById',
  acceptById = 'acceptById',
  changeArchiveStatus = 'changeArchiveStatusById',
  createList = 'createList',
  softDeleteItemFromList = 'softDeleteItemFromList',
  addItemToList = 'addItemToList',
  updateListItem = 'updateListItem',
  insert = 'insert',
  getAllPrices = 'getAllPrices',
  getDefaultDirectories = 'getDefaultDirectories',
  updateList = 'updateList',
  inviteUser = 'inviteUser',
  prices = 'prices',
  getAllOrderSlots = 'getAllOrderSlots',
  addSlotToOrder = 'addSlotToOrder',
  getDataForNewOrderSlot = 'getDataForNewOrderSlot',
  removeSlotFromOrder = 'removeSlotFromOrder',
  softDeleteOrderSlot = 'softDeleteOrderSlot',
  addItemToOrderSlot = 'addItemToOrderSlot',
  removeItemFromOrderSlot = 'removeItemFromOrderSlot',
  softDeleteOrderSlotItem = 'softDeleteOrderSlotItem',
  createPrice = 'createPrice',
  updatePrice = 'updatePrice',
  deletePrice = 'deletePrice',
}

export type GetEndpoint = (...args: any[]) => string;

export interface ApiEndpointsMap extends Record<Endpoints | string, GetEndpoint> {}

export enum ApiDirType {
  CATEGORIES_TR = 'categories_tr',
  CATEGORIES_PROD = 'categories_prod',
  CONTRACTORS = 'contractors',
  WORKERS = 'workers',
  DOCUMENTS = 'documents',
  PROJECTS = 'projects',
  ACTIVITIES = 'activities',
  COUNTS = 'counts',
  BANK_ACCOUNTS = 'bank_accounts',
  MARKS = 'marks',
  TAGS = 'tags',
  STORAGES = 'storages',
  WAREHOUSES = 'warehouses',
  BRANDS = 'brands',
  TRANSPORTERS = 'transporters',
  CUSTOM_FIELDS = 'custom_fields',
  STATUSES_ORDER = 'statuses_order',
  STATUSES_REFUND = 'statuses_refund',
  STATUSES_SHIPMENT = 'statuses_shipment',
  STATUSES_PAYMENT = 'statuses_payment',
  METHODS_PAYMENT = 'methods_payment',
  METHODS_SHIPMENT = 'methods_shipment',
  METHODS_COMMUNICATION = 'methods_communication',
  SOURCE_ATTRACTION = 'attractionSource',
  COLLECTION = 'collection',
  COLLECTIONS = 'collections',
  UNSET = 'unset',
  PROPERTIES_PRODUCTS = 'properties_products',
  VARIATIONS = 'variations',
  VARIATIONS_TEMPLATES = 'variations_templates',
  DEFAULT = 'DEFAULT',
}

export enum ApiDefaultDirType {
  SHIPMENT_TYPES = 'shipments',
  PAYMENT_TYPES = 'payments',
  COMMUNICATION_TYPES = 'communications',
}

const transactionsApiEndpoints: ApiEndpointsMap = {
  [Endpoints.getAll]: (): string => `${API_BASE_ROUTES.TRANSACTIONS}/${Endpoints.getAll}`,
  [Endpoints.create]: (): string => `${API_BASE_ROUTES.TRANSACTIONS}/${Endpoints.create}`,
  [Endpoints.deleteById]: (id?: string): string => `${API_BASE_ROUTES.TRANSACTIONS}/${Endpoints.deleteById}/${id}`,
  [Endpoints.updateById]: (id?: string): string => `${API_BASE_ROUTES.TRANSACTIONS}/${Endpoints.updateById}/${id}`,
  [Endpoints.getById]: (id?: string): string => `${API_BASE_ROUTES.TRANSACTIONS}/${Endpoints.getById}/${id}`,
};

const productsApiEndpoints: ApiEndpointsMap = {
  [Endpoints.getAll]: (): string => `${API_BASE_ROUTES.PRODUCTS}/${Endpoints.getAll}`,
  [Endpoints.create]: (): string => `${API_BASE_ROUTES.PRODUCTS}/${Endpoints.create}`,
  [Endpoints.deleteById]: (id?: string): string => `${API_BASE_ROUTES.PRODUCTS}/${Endpoints.deleteById}/${id}`,
  [Endpoints.updateById]: (id?: string): string => `${API_BASE_ROUTES.PRODUCTS}/${Endpoints.updateById}/${id}`,
  [Endpoints.getById]: (id?: string): string => `${API_BASE_ROUTES.PRODUCTS}/${Endpoints.getById}/${id}`,
  [Endpoints.getFullInfoById]: (id?: string): string =>
    `${API_BASE_ROUTES.PRODUCTS}/${Endpoints.getFullInfoById}/${id}`,
};
const propertiesApiEndpoints: ApiEndpointsMap = {
  [Endpoints.getAll]: (): string => `${API_BASE_ROUTES.PROPERTIES}/${Endpoints.getAll}`,
  [Endpoints.create]: (): string => `${API_BASE_ROUTES.PROPERTIES}/${Endpoints.create}`,
  [Endpoints.deleteById]: (id?: string): string => `${API_BASE_ROUTES.PROPERTIES}/${Endpoints.deleteById}/${id}`,
  [Endpoints.updateById]: (id?: string): string => `${API_BASE_ROUTES.PROPERTIES}/${Endpoints.updateById}/${id}`,
  [Endpoints.getById]: (id?: string): string => `${API_BASE_ROUTES.PROPERTIES}/${Endpoints.getById}/${id}`,
};
const variationsApiEndpoints = {
  [Endpoints.getAll]: (): string => `${API_BASE_ROUTES.VARIATIONS}/${Endpoints.getAll}`,
  [Endpoints.getAllByProductId]: (id?: string): string =>
    `${API_BASE_ROUTES.VARIATIONS}/${Endpoints.getAllByProductId}/${id}`,
  [Endpoints.create]: (): string => `${API_BASE_ROUTES.VARIATIONS}/${Endpoints.create}`,
  [Endpoints.deleteById]: (id?: string): string => `${API_BASE_ROUTES.VARIATIONS}/${Endpoints.deleteById}/${id}`,
  [Endpoints.updateById]: (id?: string): string => `${API_BASE_ROUTES.VARIATIONS}/${Endpoints.updateById}/${id}`,
  [Endpoints.getById]: (id?: string): string => `${API_BASE_ROUTES.VARIATIONS}/${Endpoints.getById}/${id}`,
};
const permissionsApiEndpoints: ApiEndpointsMap = {
  [Endpoints.updateById]: (permissionId?: string) =>
    `${API_BASE_ROUTES.PERMISSIONS}/${Endpoints.delete}/${permissionId}`,
  [Endpoints.deleteById]: (permissionId?: string) =>
    `${API_BASE_ROUTES.PERMISSIONS}/${Endpoints.deleteById}/${permissionId}`,
  [Endpoints.create]: () => `${API_BASE_ROUTES.PERMISSIONS}/${Endpoints.create}`,
  [Endpoints.getAllByUserId]: (userId?: string) =>
    `${API_BASE_ROUTES.PERMISSIONS}/${Endpoints.getAllByUserId}/${userId}`,
  [Endpoints.getAllByCompanyId]: (companyId?: string) =>
    `${API_BASE_ROUTES.PERMISSIONS}/${Endpoints.getAllByCompanyId}/${companyId}`,
  [Endpoints.getCurrent]: () => `${API_BASE_ROUTES.PERMISSIONS}/${Endpoints.getCurrent}`,
  [Endpoints.logIn]: (id?: string) => `${API_BASE_ROUTES.PERMISSIONS}/${Endpoints.logIn}/${id}`,
  [Endpoints.logOut]: () => `${API_BASE_ROUTES.PERMISSIONS}/${Endpoints.logOut}`,
  [Endpoints.inviteUser]: () => `${API_BASE_ROUTES.PERMISSIONS}/${Endpoints.inviteUser}`,
};

const companiesApiEndpoints: ApiEndpointsMap = {
  [Endpoints.deleteById]: (permissionId?: string) =>
    `${API_BASE_ROUTES.COMPANIES}/${Endpoints.deleteById}/${permissionId}`,
  [Endpoints.updateById]: (permissionId?: string) =>
    `${API_BASE_ROUTES.COMPANIES}/${Endpoints.updateById}/${permissionId}`,
  [Endpoints.create]: () => `${API_BASE_ROUTES.COMPANIES}/${Endpoints.create}`,
  [Endpoints.getById]: (id?: string) => `${API_BASE_ROUTES.COMPANIES}/${Endpoints.getById}/${id}`,
  [Endpoints.getAllByOwnerId]: (ownerId?: string) =>
    `${API_BASE_ROUTES.COMPANIES}/${Endpoints.getAllByOwnerId}/${ownerId}`,
};

const authApiEndpoints: ApiEndpointsMap = {
  [Endpoints.register]: () => `${API_BASE_ROUTES.AUTH}/${Endpoints.register}`,
  [Endpoints.logIn]: () => `${API_BASE_ROUTES.AUTH}/${Endpoints.logIn}`,
  [Endpoints.logOut]: () => `${API_BASE_ROUTES.AUTH}/${Endpoints.logOut}`,
  [Endpoints.deleteById]: (id?: string) => `${API_BASE_ROUTES.AUTH}/${Endpoints.deleteById}`,
  [Endpoints.getCurrent]: (id?: string) => `${API_BASE_ROUTES.AUTH}/${Endpoints.getCurrent}`,
};

const directoriesApiEndpoints: ApiEndpointsMap = {
  [Endpoints.getAllByType]: (dirType?: ApiDirType) =>
    `${API_BASE_ROUTES.DIRECTORIES}/${Endpoints.getAllByType}/${dirType || '_'}`,
  [Endpoints.getAllGrouped]: (dirType?: string) => `${API_BASE_ROUTES.DIRECTORIES}/${Endpoints.getAllGrouped}`,
  [Endpoints.create]: (dirType?: ApiDirType) => `${API_BASE_ROUTES.DIRECTORIES}/${Endpoints.create}/${dirType}`,
  [Endpoints.deleteById]: (dirType?: ApiDirType, id?: string) =>
    `${API_BASE_ROUTES.DIRECTORIES}/${Endpoints.deleteById}/${dirType || '_'}/${id}`,
  [Endpoints.updateById]: (dirType?: ApiDirType, id?: string) =>
    `${API_BASE_ROUTES.DIRECTORIES}/${Endpoints.updateById}/${dirType || '_'}/${id}`,
  [Endpoints.getById]: (dirType?: ApiDirType, id?: string) =>
    `${API_BASE_ROUTES.DIRECTORIES}/${Endpoints.getById}/${dirType || '_'}/${id}`,
  [Endpoints.changeArchiveStatus]: (dirType?: ApiDirType, id?: string) =>
    `${API_BASE_ROUTES.DIRECTORIES}/${Endpoints.changeArchiveStatus}/${dirType || '_'}/${id}`,
  [Endpoints.getDefaultDirectories]: () => `${API_BASE_ROUTES.DIRECTORIES}/${Endpoints.getDefaultDirectories}`,
};

const customRoles: ApiEndpointsMap = {};

const appSettings: ApiEndpointsMap = {
  getAllActions: () => `${API_BASE_ROUTES.APP}/getAllActions`,
};
const priceManagementEndpoints: ApiEndpointsMap = {
  [Endpoints.getAll]: () => `${API_BASE_ROUTES.PRICE_MANAGEMENT}/${Endpoints.getAll}`,
  [Endpoints.getById]: (listId: string) => `${API_BASE_ROUTES.PRICE_MANAGEMENT}/${Endpoints.getById}/${listId}`,
  [Endpoints.createList]: () => `${API_BASE_ROUTES.PRICE_MANAGEMENT}/${Endpoints.createList}`,
  [Endpoints.updateList]: (listId: string) => `${API_BASE_ROUTES.PRICE_MANAGEMENT}/${Endpoints.updateList}/${listId}`,
  [Endpoints.getAllPrices]: () => `${API_BASE_ROUTES.PRICE_MANAGEMENT}/${Endpoints.getAllPrices}`,

  createPrice: () => `${API_BASE_ROUTES.PRICE_MANAGEMENT}/${Endpoints.prices}/${Endpoints.create}`,
  updatePrice: (id?: string) => `${API_BASE_ROUTES.PRICE_MANAGEMENT}/${Endpoints.prices}/${Endpoints.update}/${id}`,
  deletePrice: (id?: string) => `${API_BASE_ROUTES.PRICE_MANAGEMENT}/${Endpoints.prices}/${Endpoints.delete}/${id}`,
};

const ordersEndpoints: ApiEndpointsMap = {
  [Endpoints.getAll]: () => `${API_BASE_ROUTES.ORDERS}/${Endpoints.getAll}`,
  [Endpoints.getById]: (orderId: string) => `${API_BASE_ROUTES.ORDERS}/${Endpoints.getById}/${orderId}`,
  [Endpoints.create]: () => `${API_BASE_ROUTES.ORDERS}/${Endpoints.create}`,
  [Endpoints.addItemToOrderSlot]: (orderId: string) =>
    `${API_BASE_ROUTES.ORDERS}/${Endpoints.addItemToOrderSlot}/${orderId}`,
  [Endpoints.softDeleteOrderSlot]: (orderId: string, orderSlotId: string) =>
    `${API_BASE_ROUTES.ORDERS}/${Endpoints.softDeleteOrderSlot}/${orderId}/${orderSlotId}`,
  [Endpoints.softDeleteOrderSlotItem]: (orderId: string, orderSlotId: string, slotItemId: string) =>
    `${API_BASE_ROUTES.ORDERS}/${Endpoints.softDeleteOrderSlotItem}/${orderId}/${orderSlotId}/${slotItemId}`,
  [Endpoints.updateListItem]: (listId: string, priceId: string) =>
    `${API_BASE_ROUTES.ORDERS}/${Endpoints.updateListItem}/${listId}/${priceId}`,
  [Endpoints.updateById]: (orderId: string) => `${API_BASE_ROUTES.ORDERS}/${Endpoints.updateById}/${orderId}`,
  [Endpoints.getAllOrderSlots]: () => `${API_BASE_ROUTES.ORDERS}/${Endpoints.getAllOrderSlots}`,
  [Endpoints.getDataForNewOrderSlot]: (productId: string) =>
    `${API_BASE_ROUTES.ORDERS}/${[Endpoints.getDataForNewOrderSlot]}/${productId}`,
};

const warehousesEndpoints = {
  [Endpoints.create]: () => `${API_BASE_ROUTES.WAREHOUSES}/${Endpoints.create}`,
  [Endpoints.delete]: (id?: string) => `${API_BASE_ROUTES.WAREHOUSES}/${Endpoints.delete}/${id}`,
  [Endpoints.update]: (id?: string) => `${API_BASE_ROUTES.WAREHOUSES}/${Endpoints.update}/${id}`,
  [Endpoints.getById]: (id?: string) => `${API_BASE_ROUTES.WAREHOUSES}/${Endpoints.getById}/${id}`,
  [Endpoints.getAll]: () => `${API_BASE_ROUTES.WAREHOUSES}/${Endpoints.getAll}`,
  [Endpoints.getAllByWarehouseId]: (id?: string) =>
    `${API_BASE_ROUTES.WAREHOUSES}/${Endpoints.getAllByWarehouseId}/${id}`,
};
const payments = {
  [Endpoints.create]: () => `${API_BASE_ROUTES.PAYMENTS}/${Endpoints.create}`,
  [Endpoints.getAll]: () => `${API_BASE_ROUTES.WAREHOUSES}/${Endpoints.getAll}`,
};

const APP_CONFIGS = {
  endpoints: {
    appSettings,
    permissions: permissionsApiEndpoints,
    companies: companiesApiEndpoints,
    auth: authApiEndpoints,
    directories: directoriesApiEndpoints,
    customRoles: customRoles,
    transactions: transactionsApiEndpoints,
    products: productsApiEndpoints,
    propertiesApiEndpoints,
    variationsApiEndpoints,
    warehousesEndpoints,
    priceManagementEndpoints,
    ordersEndpoints,
    payments,
  },
};

export default APP_CONFIGS;
