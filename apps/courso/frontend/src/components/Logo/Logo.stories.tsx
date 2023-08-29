import { Meta } from '@storybook/react';
import { Logo } from '../../components/Logo';

export default {
  title: 'Components/Logo',
  component: Logo,
} as Meta;

export const Showcase = () => {
  return (
    <div className="h-full grid grid-cols-3 gap-4">
      {['vertical', 'horizontal', 'standalone'].map((variant) => (
        <div key={variant} className="grid gap-4">
          <Logo className="h-30 w-40 p-4" variant={variant as any} />
          <Logo
            className="h-30 w-40 p-4"
            variant={variant as any}
            textVariant="textBlack"
          />
          <Logo
            className="h-30 w-40 p-4 bg-gray-300"
            variant={variant as any}
            textVariant="textWhite"
          />
          <Logo
            className="h-30 w-40 p-4"
            variant={variant as any}
            color="pink"
            textVariant="textBlack"
          />
          <Logo
            className="h-30 w-40 p-4 bg-gray-300"
            variant={variant as any}
            color="pink"
            textVariant="textWhite"
          />
        </div>
      ))}
    </div>
  );
};
