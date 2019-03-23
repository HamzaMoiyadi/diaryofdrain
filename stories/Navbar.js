export default {
    name: 'navbar',
  
    data() {
      return {
        navbarStyles: {
          border: '1px solid #eee',
          borderRadius: 3,
          backgroundColor: '#FFFFFF',
          cursor: 'pointer',
          fontSize: 15,
          padding: '3px 10px',
          margin: 10,
        },
      };
      
  },
    template: `
      <div :style="navbarStyles" class="navbar">
        <span class="logo">
            DIARYOFDRAIN
        </span>
        
      </div>
    `,
  
    methods: {
      onClick() {
        this.$emit('click');
      },
    },
  };
  