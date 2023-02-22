'use strict';

import renderer from 'react-test-renderer';
import NotFound from '../components/NotFound';

it('renders correctly', () => {
  const tree = renderer
    .create(<NotFound />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});