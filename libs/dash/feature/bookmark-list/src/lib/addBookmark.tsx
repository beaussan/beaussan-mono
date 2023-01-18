import { BookmarksInsertInput } from '@beaussan/dash/data/hasura-codegen-types';
import {
  MarkSomeRequired,
  RequiredNotNullObject,
} from '@beaussan/shared/utils/utility-types';
import { z } from 'zod';
import {
  Button,
  Dialog,
  InputField,
  useDialogContext,
  useZodForm,
} from '@beaussan/shared/ui/ui-kit';
import {
  useGetListOfBookmarksQuery,
  useInsertBookmarkMutation,
} from './requests.generated';
import React from 'react';

type BookmarkApiSend = MarkSomeRequired<
  Omit<BookmarksInsertInput, 'user' | 'userId' | 'id' | 'position'>,
  'displayName' | 'link'
>;

const validationSchema = z.object({
  link: z.string().url(),
  displayName: z.string().min(1, 'Display Name is required'),
  faviconUrl: z.string().url().or(z.string().max(0).nullish()),
});

const fromFormDataToApi = (
  data: z.infer<typeof validationSchema>
): BookmarkApiSend => {
  return {
    link: data.link,
    faviconUrl: data.faviconUrl,
    displayName: data.displayName,
  };
};

const AddBookmarkForm = () => {
  const {
    Form,
    methods: { name },
  } = useZodForm({
    schema: validationSchema,
  });
  const { setIsOpen } = useDialogContext();
  const [{ error }, insertBookmark] = useInsertBookmarkMutation();
  const [{ data: listOfBookmarks, fetching }] = useGetListOfBookmarksQuery();

  if (fetching || !listOfBookmarks) {
    return <div>Loading...</div>;
  }

  return (
    <Form
      onSubmit={async (input) => {
        const { data } = await insertBookmark({
          object: {
            ...fromFormDataToApi(input),
            position: listOfBookmarks?.bookmarks?.length + 1,
          },
        });
        if (!data) {
          return;
        }
        setIsOpen(false);
      }}
    >
      <Dialog.Title>Add a new bookmark</Dialog.Title>
      <div className="space-y-2">
        <InputField {...name('link')} label="Link" />
        <InputField {...name('displayName')} label="Display Name" />
        <InputField {...name('faviconUrl')} label="FavIcon URL" />
      </div>

      {error ? <div>{error.message}</div> : null}

      <Dialog.ActionGroup>
        <Dialog.CloseButton intent="warn">Cancel</Dialog.CloseButton>
        <Button intent="primary" type="submit">
          Submit
        </Button>
      </Dialog.ActionGroup>
    </Form>
  );
};

export const AddBookmark = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>+</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <AddBookmarkForm />
      </Dialog.Content>
    </Dialog.Root>
  );
};
