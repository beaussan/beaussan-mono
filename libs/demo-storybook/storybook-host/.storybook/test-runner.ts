import { checkA11y, injectAxe } from 'axe-playwright';

export default {
  async preRender(page, context) {
    await injectAxe(page);
  },
  async postRender(page, context) {
    await checkA11y(page, '#root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
      axeOptions: {},
    });
  },
};
