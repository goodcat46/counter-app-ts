import { t } from '../lang';
import { IconIdType } from '../img/sprite';
import { enumToArray } from '../utils';
import { isUndefined } from 'lodash';

export const statusName = {
  approved: 'Узгоджено',
  success: 'Успішно',
  failed: 'Не успішно',
  pending: 'Очікування',
  rejected: 'Відхилено',
  visible: 'Видимий',
  hidden: 'Прихований',
  available: 'У наявності',
  notAvailable: 'Відсутній',
  awaitingOnStock: 'Очікується',
  isCommission: 'Комісійний',
  isStandart: 'Стандарт',
  iban: 'IBAN',
  card: 'CARD',
  payAfter: 'Післяплата',
  payed: 'Оплачено',
  inWork: 'У роботі',
  new: 'Нове',
  inRoad: 'У дорозі',
  inProcess: 'У процесі',
  accepted: 'Прийнято',
  mixed: 'Змішано',
  express: 'Експрес',
  curier: "Кур'єр",
  standart: 'Стандарт',
  problem: 'Проблема',
  resolving: 'Вирішується',
  archived: 'Архів',
  default: 'Без статусу',
  INCOME: 'Дохід',
  EXPENSE: 'Витрата',
  TRANSFER: 'Переказ',
};
export const statusIconId = {
  success: 'success',
  approved: 'success',
  pending: 'time',
  rejected: 'error',
  visible: 'visibility-on',
  hidden: 'visibility-off',
  available: 'success',
  notAvailable: 'clear',
  awaitingOnStock: 'time',
  isCommission: 'success',
  isStandart: 'success',
  problem: 'error',
  resolving: 'warning',
  new: 'info',
  inWork: 'info',
  inRoad: 'info',
  inProcess: 'info',
  standart: 'info',
  accepted: 'success',
  mixed: 'error',
  hasChange: 'change',
  payed: 'success',
  iban: 'bank',
  card: 'card-ok',
  payAfter: 'time',
  express: 'info',
  curier: 'info',
  orderSuccess: 'success',
  archived: 'error',
  INCOME: 'info',
  EXPENSE: 'info',
  TRANSFER: 'info',
  default: 'info',
};

export const statusData = {
  name: statusName,
  iconId: statusIconId,
};
const colors = {
  clrLight: '#fff',
  clrDark: '#121212',
  default: 'rgb(154, 154, 154)',
  defaultLight: '#E9E9E9',
  clrInfo: '#3498db',
  clrInfoLight: 'rgb(156,200,255)',
  clrSuccess: '#07bc0c',
  clrSuccessLight: 'rgb(165,255,155)',
  clrWarning: '#f1c40f',
  clrWarningLight: 'rgb(255,250,155)',
  clrError: '#e74c3c',
  clrErrorLight: 'rgb(255,158,155)',
  clrPrimary: '#cdcdcd',
  expense: '#FF3B30',
  income: '#30D158',
  transfer: '#5E5CE6',
  textPrimary: '#EFEFEF',
};

export interface StatusData<Name extends string | number | symbol = any> {
  name: Name;
  color?: string;
  colorSecondary?: string;
  label: string;
  iconId?: IconIdType;
  description?: string;
}

export enum StatusNameEnum {
  noStatus = 'noStatus',
  error = 'error',
  success = 'success',
  info = 'info',
  warning = 'warning',
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
  TRANSFER = 'TRANSFER',
  pending = 'pending',
  approved = 'approved',
  fulfilled = 'fulfilled',
  rejected = 'rejected',
  GOODS = 'GOODS',
  SERVICE = 'SERVICE',
}

export const statusDataMap: Record<StatusNameEnum, StatusData> = {
  noStatus: {
    name: 'NO_STATUS',
    color: 'inherit',
    iconId: 'info',
    label: t('undefined'),
    colorSecondary: colors.defaultLight,
  },
  error: {
    name: 'error',
    color: 'inherit',
    iconId: 'error',
    label: t('error'),
    colorSecondary: colors.clrErrorLight,
    description: 'error',
  },
  success: {
    name: 'success',
    color: 'inherit',
    iconId: 'success',
    label: t('success'),
    colorSecondary: colors.clrSuccessLight,
  },
  info: {
    name: 'info',
    color: 'inherit',
    iconId: 'info',
    label: t('info'),
    colorSecondary: colors.clrInfoLight,
  },
  warning: {
    name: 'warning',
    color: 'inherit',
    iconId: 'warning',
    label: t('warning'),
    colorSecondary: colors.clrWarningLight,
  },
  INCOME: {
    name: 'INCOME',
    label: t('INCOME'),
    color: colors.clrSuccess,
    colorSecondary: colors.clrSuccessLight,
  },
  EXPENSE: {
    name: 'EXPENSE',
    label: t('EXPENSE'),
    color: colors.clrError,
    colorSecondary: colors.clrErrorLight,
  },
  TRANSFER: {
    name: 'TRANSFER',
    label: t('TRANSFER'),
    color: colors.clrInfo,
    colorSecondary: colors.clrInfoLight,
  },
  pending: {
    name: 'pending',
    label: t('pending'),
    color: colors.clrInfo,
    colorSecondary: colors.clrInfoLight,
  },
  fulfilled: {
    name: 'fulfilled',
    label: t('fulfilled'),
    color: colors.clrSuccess,
    colorSecondary: colors.clrSuccessLight,
  },
  rejected: {
    name: 'rejected',
    label: t('rejected'),
    color: colors.clrLight,
    colorSecondary: colors.clrError,
  },
  GOODS: {
    name: 'goods',
    label: t('GOODS'),
    color: colors.clrInfo,
    colorSecondary: colors.clrInfoLight,
  },
  SERVICE: {
    name: 'service',
    label: t('SERVICE'),
    color: colors.clrError,
    colorSecondary: colors.clrErrorLight,
  },
  approved: {
    name: 'approved',
    label: t('approved'),
    color: colors.clrSuccess,
    colorSecondary: colors.clrSuccessLight,
  },
};

export interface StatusFilterOption<T extends string | number | symbol = any> extends StatusData<T> {
  _id?: string;
  value: T;
}

export const statusesMap = new Map<StatusNameEnum | string, StatusData>(Object.entries(statusDataMap));

export function getStatusData(status?: StatusNameEnum | string): StatusData | undefined {
  return status && statusesMap.has(status) ? statusesMap.get(status) : undefined;
}

export function getStatusesByEnum<T extends object = any>(enumObj: T): Array<StatusFilterOption<keyof T>> {
  const names = enumToArray(enumObj);

  return names
    .map((k): StatusFilterOption<keyof T> | undefined => {
      const data = getStatusData(k as string);
      if (!data) return undefined;

      return { ...data, value: k } as StatusFilterOption<keyof T>;
    })
    .filter(v => !isUndefined(v)) as Array<StatusFilterOption<keyof T>>;
}

export type StatusNames = keyof typeof statusDataMap;
