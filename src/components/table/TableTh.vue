<script>
export default {
  name: 'TableTh',

  props: {
    header: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  render(createElement) {
    let component = null;
    let params = {};
    if (this.header.useHeaderComponent) {
      component = this.header.useHeaderComponent;
      params = {
        props: {
          header: this.header,
        },
      };
    } else {
      component = 'th';
      params = {};
    }
    return createElement(
      component,
      params,
      [
        createElement('div', {
          domProps: {
            innerHTML: this.header.title,
          },
        }),
      ],
    );
  },
};
</script>
