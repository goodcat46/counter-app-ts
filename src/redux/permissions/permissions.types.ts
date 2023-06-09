import { ICustomRole } from '../customRoles/customRoles.types';
import { AppResponse, IBase } from '../global.types';
import { ICompany } from '../companies/companies.types';
import { IUser } from '../auth/auth.types';
import { StateErrorType } from '../reduxTypes.types';

export type PermissionStatusType = 'active' | 'rejected' | 'pending' | 'baned';

export enum PermissionStatus {
  PENDING = 'PENDING',
  REJECTED = 'REJECTED',
  ACCEPTED = 'ACCEPTED',
  BANED = 'BANED',
}

export interface IPermission extends IBase {
  status?: PermissionStatus;
  company?: Partial<ICompany>;
  user?: Partial<IUser>;
  owner?: Partial<IUser>;
  role?: Partial<ICustomRole>;
  expireAt?: number | Date;
  permission_token?: string;
}

export interface IPermissionForReq {
  company: string;
  user: string;
  role: string;
  actions: string[];
}

export interface IPermissionResData extends AppResponse<IPermission> {}

export interface IPermissionsResData extends AppResponse<IPermission[]> {}

export interface IPermissionReqData<D = IPermissionForReq | Partial<IPermissionForReq>> {
  id: string;
  _id?: string;
  data: D;
}

export interface IPermissionsState {
  permission: Partial<IPermission>;
  permissions: IPermission[];
  permission_token?: string;
  isLoading: boolean;
  error: StateErrorType;
}
