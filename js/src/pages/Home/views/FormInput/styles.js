export default (theme) => ({
  container: {
    boxSizing: 'border-box',
    marginTop: 8
  },
  error: {
    ...theme.error,
    bottom: -16,
    color: '#f44336'
  }
});
