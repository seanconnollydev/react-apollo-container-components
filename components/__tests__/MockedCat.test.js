import React from 'react';
import { mount } from 'enzyme';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils';
// Make sure the MockComponent is imported before the CatContainer
import MockComponent from '../../test-support/MockComponent';
import GET_CAT_QUERY from '../get-cat-query.graphql';
import CatContainer from '../CatContainer';
import CatContainerHOC from '../CatContainerHOC';

jest.mock('../Cat', () => MockComponent);

describe('Mocked Cat', () => {
  let mocks;

  beforeEach(() => {
    mocks = [
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
  });

  test('<CatContainer />', async () => {
    const wrapper = mount((
      <MockedProvider mocks={mocks}>
        <CatContainer />
      </MockedProvider>
    ));

    await wait(0);
    expect(wrapper.update().find(MockComponent).prop('cat')).toMatchObject({ id: '123', name: 'Cat 123' });
  });

  test('<CatContainerHOC />', async () => {
    const wrapper = mount((
      <MockedProvider mocks={mocks}>
        <CatContainerHOC />
      </MockedProvider>
    ));

    await wait(0);
    expect(wrapper.update().find(MockComponent).prop('cat')).toMatchObject({ id: '123', name: 'Cat 123' });
  });
});
