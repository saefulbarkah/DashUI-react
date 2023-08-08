import { LinkProps as MuiLinkProps, Link as MuiLink } from '@mui/material';
import Link, { LinkProps as NextLinkProps } from 'next/link';

type TLink = MuiLinkProps & NextLinkProps & {};

export const NextLink = ({ ...props }: TLink) => {
  return <MuiLink component={Link} {...props} />;
};
