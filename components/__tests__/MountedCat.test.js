import React from 'react';
import { mount } from 'enzyme';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils';
import GET_CAT_QUERY from '../get-cat-query.graphql';
import CatContainer from '../CatContainer';

test('Mounted Cat', async () => {
  const mocks = [
    {
      request: { query: GET_CAT_QUERY },
      result: {
        data: {
          cat: {
            __typename: 'Cat',
            id: '123',
            name: 'Cat 123',
          },
        },
      },
    },
  ];

  const wrapper = mount((
    <MockedProvider mocks={mocks}>
      <CatContainer />
    </MockedProvider>
  ));

  await wait(0);
  expect(wrapper.text()).toContain('id: 123');
  expect(wrapper.text()).toContain('name: Cat 123');
});
