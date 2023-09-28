import React, { Component } from 'react';
import { Button, ActionButton } from '@react-spectrum/button';
import { ActionMenu, Item } from '@react-spectrum/menu';
import { Text, Heading } from '@react-spectrum/text';
import { Flex } from '@react-spectrum/layout';
import { ListBox, Section } from '@react-spectrum/listbox';
import { TagGroup } from '@react-spectrum/tag';
import { Calendar, RangeCalendar } from '@react-spectrum/calendar';
import { DatePicker } from '@react-spectrum/datepicker';
import { Form } from '@react-spectrum/form';
import { TextField } from '@react-spectrum/textfield';
import { Checkbox } from '@react-spectrum/checkbox';
import { Slider } from '@react-spectrum/slider';
import { RadioGroup, Radio } from '@react-spectrum/radio';
import { Switch } from '@react-spectrum/switch';
import { AlertDialog, DialogTrigger } from '@react-spectrum/dialog';
import { ProgressBar, ProgressCircle } from '@react-spectrum/progress';
import { Link } from '@react-spectrum/link';
import Navbar from '../feature/elements/Navbar';

export default class Spectrum extends Component {
  render() {
    return (
      <section>
        <Heading level={1}>Other Components</Heading>
        <Flex direction="column" gap="size-250" justifyContent="space-around" height="100%">
          <Text>List of components react-spectrum offers</Text>
          <Navbar />
          <Flex wrap gap="size-250">
            <Button width="size-100" variant="accent" style="fill">Save</Button>
            <Button width="size-100" variant="accent" style="outline">Save</Button>
            <Button width="size-100" variant="secondary" style="fill">Save</Button>
            <Button width="size-100" variant="negative" style="fill">Save</Button>
            <Button  width="size-100" variant="accent" isDisabled>Save</Button>
          </Flex>
          <Flex wrap gap="size-250">
            <ActionMenu width="size-100">
              <Item>Cut</Item>
              <Item>Copy</Item>
              <Item>Paste</Item>
            </ActionMenu>
          </Flex>
          <Flex wrap gap="size-250">
            <ListBox
              width="size-2400"
              aria-label="Pick your favorite"
              selectionMode="single"
            >
              <Section title="Animals">
                <Item key="Aardvark">Aardvark</Item>
                <Item key="Kangaroo">Kangaroo</Item>
                <Item key="Snake">Snake</Item>
              </Section>
              <Section title="People">
                <Item key="Danni">Danni</Item>
                <Item key="Devon">Devon</Item>
                <Item key="Ross">Ross</Item>
              </Section>
            </ListBox>
          </Flex>
          <Flex gap="size-250">
            <TagGroup
              label="Categories"
              aria-label="TagGroup with action">
              <Item>News</Item>
              <Item>Travel</Item>
              <Item>Gaming</Item>
              <Item>Shopping</Item>
            </TagGroup>
          </Flex>
          <Calendar aria-label="Event date" />
          <RangeCalendar aria-label="Trip dates" />
          <DatePicker width="size-100" label="Event date" />
          <h3 id="label-3">Personal Information</h3>
          <Form maxWidth="size-3600" aria-labelledby="label-3">
            <TextField label="First Name" />
            <TextField label="Last Name" />
            <RadioGroup label="Favorite pet">
              <Radio value="dogs">Dogs</Radio>
              <Radio value="cats">Cats</Radio>
              <Radio value="dragons">Dragons</Radio>
            </RadioGroup>
            <Checkbox>Remember me</Checkbox>
          </Form>
          <Slider label="Cookies to buy" defaultValue={12} />
          <Switch>Low power mode</Switch>
          <DialogTrigger>
            <ActionButton width="size-1000">Save</ActionButton>
            <AlertDialog
              variant="confirmation"
              title="Save file"
              primaryActionLabel="Save"
              cancelLabel="Cancel"
              autoFocusButton="primary">
              A file with the same name already exists. Overwrite?
            </AlertDialog>
          </DialogTrigger>
          <ProgressBar label="Loading…" isIndeterminate />
          <ProgressCircle aria-label="Loading…" isIndeterminate />
          <Link>
            <a href="https://spectrum.adobe.com/" target="_blank" rel="noreferrer">
              See full documentation here.
            </a>
          </Link>
        </Flex>
      </section>
    )
  }
}
