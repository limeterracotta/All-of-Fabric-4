////////////////////////
/// Made by Team AOF ///
////////////////////////

events.listen("recipes", function (event) {

  // Golden bars
  event.shapeless('blockus:golden_bars', ['charm:gold_bars'])
  event.shapeless('charm:gold_bars', ['blockus:golden_bars'])

});