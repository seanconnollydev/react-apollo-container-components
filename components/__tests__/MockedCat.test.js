import React from 'react';
import { mount } from 'enzyme';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils';
import MockComponent from '../../test-support/MockComponent';
import CatContainer, { GET_CAT_QUERY } from '../CatContainer';

jest.mock('../Cat', () => MockComponent);

test('Mocked Cat', async () => {
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
  expect(wrapper.update().find(MockComponent).prop('cat')).toMatchObject({ id: '123', name: 'Cat 123' });
});
