import React from 'react';
import "../../styles/index.css";
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes, withMarkdownNotes } from '@storybook/addon-notes';
import { linkTo } from '@storybook/addon-links';
import { ActionButton } from "../components/action-button/index.tsx"
import { OtherActionButton } from "../components/other-button/index.tsx"

import { Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

const ModifiedActionButton = (props) => <ActionButton onClick={action('clicked')}>{props.children}</ActionButton>;
const buttonWithText = () => (<ModifiedActionButton> With Text </ModifiedActionButton>);
const buttonWithEmoji = () => (<OtherActionButton onClick={action('clicked')}> 
  <span role="img" aria-label="so cool">
    😀 😎 👍 💯
  </span>
</OtherActionButton>);


storiesOf('Button', module)
  .addDecorator(withNotes)
  .add('withNotes', buttonWithText, {
    notes: 'This is the notes for a button. This is helpful for adding details about a story in a separate panel.',
  })
  .add('with text', buttonWithText)
  .add('with some emoji', buttonWithEmoji);
