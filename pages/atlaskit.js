/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import dynamic from 'next/dynamic'
import Layout from '../components/layout'

const JsonView = dynamic({
    loader: () => import('react-json-view'),
    loading: () => <p>Loading in propgress</p>,
    ssr: false
});

import { AkCodeBlock } from '@atlaskit/code'
import { Checkbox } from '@atlaskit/checkbox';
import { DatePicker, DateTimePicker, TimePicker } from '@atlaskit/datetime-picker'
import { colors } from '@atlaskit/theme';
import SuccessIcon from '@atlaskit/icon/glyph/check-circle';
import Flag from '@atlaskit/flag';
import Button from '@atlaskit/button';
import InlineDialog from '@atlaskit/inline-dialog';
import InlineEdit from '@atlaskit/inline-edit';
import styled from 'styled-components';
import Textfield from '@atlaskit/textfield';
import { gridSize, fontSize } from '@atlaskit/theme';
import InlineMessage from '@atlaskit/inline-message';

export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogOpen: false
        }
        this.toggleDialog = this.toggleDialog.bind(this)
    }

    toggleDialog = () => this.setState({ dialogOpen: !this.state.dialogOpen });

    render() {
        return (
            <Layout>
                <Checkbox
                    value="Basic checkbox"
                    label="Basic checkbox"
                    onChange={this.onChange}
                    name="checkbox-basic"
                />
                <br />
                <AkCodeBlock text={code} />
                <br />
                <DateTimePicker />
                <br />
                <Flag
                    actions={[
                        { content: 'Show me', onClick: () => { } },
                        { content: 'No thanks', onClick: () => { } },
                    ]}
                    icon={<SuccessIcon primaryColor={colors.G300} label="Info" />}
                    description="We got fun an games. We got everything you want honey, we know the names."
                    id="1"
                    key="1"
                    title="Welcome to the jungle"
                />
                <br />
                <div>
                    <InlineDialog
                        onClose={() => {
                            this.setState({ dialogOpen: false });
                        }}
                        content={content}
                        isOpen={this.state.dialogOpen}
                        placement={"bottom"}
                    >
                        <Button
                            isSelected={this.state.dialogOpen}
                            onClick={this.toggleDialog}
                        >
                            Click me!
                        </Button>
                    </InlineDialog>
                </div>
                <br />
                <InlineEdit
                    defaultValue={this.state.editValue}
                    label="Inline edit"
                    editView={fieldProps => <Textfield {...fieldProps} autoFocus />}
                    readView={() => (
                        <ReadViewContainer>
                            {this.state.editValue || 'Click to enter value'}
                        </ReadViewContainer>
                    )}
                    onConfirm={value => this.setState({ editValue: value })}
                />
                <br />
                <InlineMessage
                    title="Inline Message Title Example"
                    secondaryText="Secondary Text"
                >
                    <p>Primary and secondary text dialog</p>
                </InlineMessage>
                <JsonView src={json} />
            </Layout>
        )
    }
}

const code = `const JSONTree = dynamic(() => import('react-json-view'), { ssr: false });
const Button = dynamic(() => import('@atlaskit/button'), { ssr: false });
import { AkCode, AkCodeBlock } from '@atlaskit/code'
`

const json = {
    array: [1, 2, 3, 4, 5, 6],
    bool: true,
    object: {
        foo: 'bar',
        hello: 'asdasd',
        asdasd: 'asdasds'
    }
}

const content = (
    <div>
        <p>Hello!</p>
    </div>
);

const ReadViewContainer = styled.div`
  display: flex;
  font-size: ${fontSize()}px;
  line-height: ${(gridSize() * 2.5) / fontSize()};
  max-width: 100%;
  min-height: ${(gridSize() * 2.5) / fontSize()}em;
  padding: ${gridSize()}px ${gridSize() - 2}px;
  word-break: break-word;
`;