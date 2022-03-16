/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';
import Link from 'next/link';
import { Link as MuiLink } from '@material-ui/core';

const NextLink = ({ href, as, prefetch, component = 'a', color = 'inherit', underline = 'none', ...props }, ref) => (
  <Link href={href} as={as} prefetch={prefetch} passHref>
    <MuiLink ref={ref} component={component} {...props} color={color} underline={underline} />
  </Link>
);

export default forwardRef(NextLink);
