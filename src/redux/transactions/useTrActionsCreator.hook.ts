import { useModalProvider } from '../../components/ModalProvider/ModalProvider';
import { TransactionsService } from './useTransactionsService.hook';
import { useCallback } from 'react';
import TransactionForm from '../../components/Forms/TransactionForm';
import { filterOptions } from '../../data/transactions.data';
import { TableActionCreator } from '../../components/TableList/tableTypes.types';
import { ITransaction } from './transactions.types';
import { createThunkPayload } from '../../utils/fabrics';

export type TrActionsCreator = TableActionCreator<ITransaction>;
const useTrActionsCreator = (service: TransactionsService): TrActionsCreator => {
  const modal = useModalProvider();

  return useCallback(
    ctx => [
      {
        name: 'editTr',
        title: 'Редагування транзакції',
        icon: 'edit',
        disabled: false,
        disabledCheck: () => false,
        type: 'onlyIcon',
        onClick: () => {
          modal.handleOpenModal({
            ModalChildren: TransactionForm,
            modalChildrenProps: {
              title: 'Редагування транзакції',
              filterOptions,
              onSubmitEdit: service.editById,
              fillHeight: true,
            },
          });
        },
      },
      {
        name: 'copyTr',
        title: 'Копіювання транзакції',
        icon: 'copy',
        type: 'onlyIcon',
        disabled: false,
        disabledCheck: () => false,
        onClick: () => {
          modal.handleOpenModal({
            ModalChildren: TransactionForm,
            modalChildrenProps: {
              title: 'Копіювання транзакції',
              filterOptions,
              onSubmit: service.create,
              fillHeight: true,
            },
          });
        },
      },
      {
        name: 'deleteTr',
        title: 'Видалення транзакції',
        icon: 'delete',
        iconSize: '90%',
        type: 'onlyIcon',
        disabled: true,
        disabledCheck: () => true,
        onClick: () => {
          service.deleteById(
            createThunkPayload<{ id: string }, { id: string }>(
              { id: 'id' },
              {
                onSuccess(d) {
                  console.log(d);
                },
              }
            )
          );
        },
      },
      { separator: true },
      {
        name: 'createIncomeTr',
        title: 'Дохід',
        icon: 'INCOME',
        iconSize: '90%',
        type: 'onlyIconFilled',
        disabled: false,
        disabledCheck: () => true,
        onClick: () => {
          modal.handleOpenModal({
            ModalChildren: TransactionForm,
            modalChildrenProps: {
              title: 'Створити нову',
              filterOptions,
              defaultOption: 0,
              defaultState: { type: 'INCOME' },
              onSubmit: service.create,
              fillHeight: true,
            },
          });
        },
      },
      {
        name: 'createTransferTr',
        title: 'Переказ між рахунками',
        icon: 'TRANSFER',
        iconSize: '90%',
        type: 'onlyIconFilled',
        disabled: false,
        disabledCheck: () => true,
        onClick: () => {
          modal.handleOpenModal({
            ModalChildren: TransactionForm,
            modalChildrenProps: {
              title: 'Створити нову',
              filterOptions,
              defaultOption: 1,
              defaultState: { type: 'TRANSFER' },
              onSubmit: service.create,
              fillHeight: true,
            },
          });
        },
      },
      {
        name: 'createExpenseTr',
        title: 'Витрата',
        icon: 'EXPENSE',
        iconSize: '90%',
        type: 'onlyIconFilled',
        disabled: false,
        disabledCheck: () => true,
        onClick: () => {
          modal.handleOpenModal({
            ModalChildren: TransactionForm,
            modalChildrenProps: {
              title: 'Створити нову',
              filterOptions,
              defaultOption: 2,
              defaultState: { type: 'EXPENSE' },
              onSubmit: service.create,
              fillHeight: true,
            },
          });
        },
      },
    ],

    [modal, service]
  );
};

export type useTrActionsCreatorHookType = typeof useTrActionsCreator;
// export type UseTrActionsCreatorHookType=type

export { useTrActionsCreator };