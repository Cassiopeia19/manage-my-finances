class ReloadPage {
  refresh = (..._props) => {
    window.location.reload();
  };
}

export default new ReloadPage();
