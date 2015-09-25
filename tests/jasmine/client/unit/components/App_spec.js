describe("App Component", function() {
  var defProps, renderWithProps, component, el, $el;

  beforeEach(function() {
    defProps = {
      label: 'click me'
    }
    renderWithProps = function(props) {
      component = renderComponent(App, props);
      el = React.findDOMNode(component);
      $el = $(el);
    };
  });

  it("should have default status hide complte tasks of false", function() {
    renderWithProps({});
    expect(component.state.hideCompleted).toBe(false);
  });

  it("should mount the prop", function (){
    renderWithProps(defProps);
    expect($el.length).toEqual(1);
  });

  it("should toggleHideCompleted", function (){
    renderWithProps({});
    component.toggleHideCompleted();
    expect(component.state.hideCompleted).toEqual(true);
    component.toggleHideCompleted();
    expect(component.state.hideCompleted).toEqual(false);
  });

});
