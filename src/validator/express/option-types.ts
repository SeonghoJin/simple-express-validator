import { NotEmptyStringContextOption } from '@context';

export type GetBooleanOptions = {
  pipe?: boolean;
};

export type GetNotEmptyStringOption = Pick<NotEmptyStringContextOption, 'ignoreWhiteSpace'> & {
  pipe?: boolean;
};

export type GetNumberOptions = {
  pipe?: boolean;
};

export type GetObjectOption = {
  pipe?: boolean;
};

export type GetStringOption = {
  pipe?: boolean;
};
