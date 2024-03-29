import { ICustomRole } from '../redux/customRoles/customRoles.types';
import { getAllAccessKeys } from '../components/AppPages';

export const initialCustomRole: ICustomRole = {
  _id: 'dfbsdgbd',
  label: 'Фінансист',
  description: 'Такоє собі посада',
  actions: [],
  // accessKeys: [
  //   'companies',
  //   'transactions',
  //   'orders',
  //   'refunds',
  //   'supplement',
  //   'storage',
  //   'manager',
  //   'admin',
  //   'products',
  //   'dashboard',
  // ],
  accessKeys: getAllAccessKeys(),
};

export const rolesMockData: ICustomRole[] = [
  {
    _id: '5252457444245',
    label: 'Адмін',
    description: 'Може все',
    actions: ['create_orders', 'get_all_orders', 'get_personal_orders'],
    accessKeys: ['companies'],
  },
  {
    _id: '5252753745245',
    label: 'Недо-адмін',
    description: 'Може майже все',
    actions: ['create_orders', 'get_all_orders', 'get_personal_orders'],
    accessKeys: ['companies'],
  },
];
