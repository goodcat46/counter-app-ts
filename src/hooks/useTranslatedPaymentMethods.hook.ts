import { usePaymentsSelector } from '../redux/selectors.store';
import { useMemo } from 'react';
import { getTranslatedString, LangKey } from '../lang';
import { IPaymentMethod } from '../redux/payments/payments.types';
import { ExtPaymentService } from '../redux/integrations/integrations.types';
import { IInvoicingMethod } from '../redux/invoices/invoices.types';

export const useTranslatedPaymentMethods = (langKey: LangKey = 'ua') => {
  const paymentsState = usePaymentsSelector();
  return useMemo((): (IPaymentMethod & { parent?: ExtPaymentService })[] => {
    return paymentsState.methods.map(el => {
      const parent = el?.service
        ? {
            ...el?.service,
            label: el.service?.lang ? getTranslatedString(el.service?.lang, langKey) : el.service?.label,
          }
        : undefined;

      return {
        ...el,
        value: el._id,
        label: el.lang ? getTranslatedString(el.lang, langKey) : el.label,
        service: parent,
        parent,
      };
    });
  }, [langKey, paymentsState.methods]);
};
const useTranslatedInvoicingMethods = (langKey: LangKey = 'ua') => {
  const paymentsState = usePaymentsSelector();
  return useMemo((): (IInvoicingMethod & { parent?: ExtPaymentService })[] => {
    return paymentsState.methods.map(el => {
      const parent = el?.service
        ? {
            ...el?.service,
            label: el.service?.lang ? getTranslatedString(el.service?.lang, langKey) : el.service?.label,
            labels: el.service?.lang ? getTranslatedString(el.service?.lang, langKey) : el.service?.label,
          }
        : undefined;

      return {
        ...el,
        value: el._id,
        label: el.lang ? getTranslatedString(el.lang, langKey) : el.label,
        service: parent,
        parent,
      };
    });
  }, [langKey, paymentsState.methods]);
};
