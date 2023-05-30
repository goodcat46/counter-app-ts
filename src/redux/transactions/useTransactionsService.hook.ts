import { useTransactionsSelector } from 'redux/selectors.store';
import { ThunkPayload, useAppDispatch } from 'redux/store.store';
import { ITransactionReqData } from './transactions.types';
import { ITransactionsState } from './transactions.slice';

export type ServiceDispatcher<SD = any, RD = any, E = any> = (payload: ThunkPayload<SD, RD, E>) => void;

export interface TransactionsService {
  dispatch: ReturnType<typeof useAppDispatch>;
  state: ITransactionsState;
  create: ServiceDispatcher<ITransactionReqData>;
  deleteById: ServiceDispatcher<{ id: string }>;
  editById: ServiceDispatcher<ITransactionReqData>;
  getById: ServiceDispatcher<{ id: string }>;
}

const useTransactionsService = (): TransactionsService => {
  const dispatch = useAppDispatch();
  const state = useTransactionsSelector();

  return {
    create: payload => {
      console.log('trService create', payload);
    },
    deleteById: payload => {
      console.log('trService deleteById', payload);
    },
    editById: payload => {
      console.log('trService editById', payload);
    },
    getById: payload => {
      console.log('trService getById', payload);
    },
    dispatch,
    state,
  };
};

export type useTrServiceHookType = typeof useTransactionsService;
export default useTransactionsService as useTrServiceHookType;