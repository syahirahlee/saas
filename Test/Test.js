import App from '/src/App.js';
import renderer from 'react-test-renderer';
import React from "react";

test('If website skeleton will load.', () =>
{
    const component = renderer.create(<App/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
