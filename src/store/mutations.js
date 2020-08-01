export default {
  changeCity (state, city) {
    this.state.city = city
    try {
      localStorage.city = city
    } catch (e) {
    }
  }
}
