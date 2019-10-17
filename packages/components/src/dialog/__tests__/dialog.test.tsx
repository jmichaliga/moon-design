import * as React from 'react';
import { create } from 'react-test-renderer';
import { Global } from '@emotion/core';

import { Dialog } from '../dialog';
import { DialogHeading, DialogText } from '../typography';

/**
 * Setup
 *
 * Prevent Reach UI from injecting its own styles.
 * https://ui.reach.tech/styling/
 */
const Setup = ({ children }: any) => (
  <>
    <Global styles={{ '&:root': { '--reach-dialog': 1 } }} />
    {children}
  </>
);

const ExampleHeading = () => (
  <DialogHeading>Lorem ipsum dolor sit amet.</DialogHeading>
);
const ExampleText = () => (
  <DialogText>
    Consectetur adipiscing elit. Phasellus eget vulputate nibh, nec laoreet
    lectus. Proin at lacus quis justo mattis porta. Nulla sed nisl volutpat,
    varius enim eu, semper augue.
  </DialogText>
);

/**
 * Mocks
 */
jest.mock('@reach/portal', () => {
  return ({ children, ref }: any) => <div ref={ref}>{children}</div>;
});

jest.mock('react-focus-lock', () => {
  return ({ children, ref }: any) => (
    <div ref={ref} style={{}}>
      {children}
    </div>
  );
});

jest.mock('react-dom', () => ({
  findDOMNode() {
    return null;
  },
  render() {
    return null;
  },
}));

/**
 * Tests
 */
describe('Dialog', () => {
  describe('default', () => {
    test('renders as hidden', () => {
      const dialog = create(
        <Setup>
          <Dialog state={{ showDialog: false }}>
            <ExampleHeading />
            <ExampleText />
          </Dialog>
        </Setup>
      );

      expect(dialog).toMatchSnapshot();
    });

    test('renders as visible when `showDialog` is set to `true`', () => {
      const dialog = create(
        <Setup>
          <Dialog state={{ showDialog: true }}>
            <ExampleHeading />
            <ExampleText />
          </Dialog>
        </Setup>
      );

      expect(dialog).toMatchSnapshot();
    });
  });

  test('renders with custom `maxWidth`', () => {
    const dialog = create(
      <Setup>
        <Dialog state={{ showDialog: true }} maxWidth={400}>
          <ExampleHeading />
          <DialogText>
            Consectetur adipiscing elit. Phasellus eget vulputate nibh, nec
            laoreet lectus. Proin at lacus quis justo mattis porta. Nulla sed
            nisl volutpat, varius enim eu, semper augue.
          </DialogText>
        </Dialog>
      </Setup>
    );

    expect(dialog).toMatchSnapshot();
  });

  describe('longForm', () => {
    test('renders with `longForm` template', () => {
      const dialog = create(
        <Setup>
          <Dialog state={{ showDialog: true }} longForm>
            <ExampleHeading />
            <ExampleText />
          </Dialog>
        </Setup>
      );

      expect(dialog).toMatchSnapshot();
    });

    test('overriden by custom `maxWidth`', () => {
      const dialog = create(
        <Setup>
          <Dialog state={{ showDialog: true }} longForm maxWidth={420}>
            <ExampleHeading />
            <ExampleText />
          </Dialog>
        </Setup>
      );

      expect(dialog).toMatchSnapshot();
    });
  });

  describe('footer', () => {
    test('renders with `footer`', () => {
      const dialog = create(
        <Setup>
          <Dialog
            state={{ showDialog: true }}
            footer={<button type="button">Close</button>}
          >
            <ExampleHeading />
            <ExampleText />
          </Dialog>
        </Setup>
      );

      expect(dialog).toMatchSnapshot();
    });

    test('renders with `longForm` template and `footer`', () => {
      const dialog = create(
        <Setup>
          <Dialog
            state={{ showDialog: true }}
            longForm
            footer={<button type="button">Close</button>}
          >
            <ExampleHeading />
            <ExampleText />
          </Dialog>
        </Setup>
      );

      expect(dialog).toMatchSnapshot();
    });

    test('renders with `maxWidth` and `footer`', () => {
      const dialog = create(
        <Setup>
          <Dialog
            state={{ showDialog: true }}
            footer={<button type="button">Close</button>}
            maxWidth={420}
          >
            <ExampleHeading />
            <ExampleText />
          </Dialog>
        </Setup>
      );

      expect(dialog).toMatchSnapshot();
    });
  });
});
