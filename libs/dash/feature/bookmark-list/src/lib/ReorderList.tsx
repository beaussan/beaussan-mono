import { Button, Dialog } from '@beaussan/shared/ui/ui-kit';
import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import {
  BookmarkItemFragment,
  useGetListOfBookmarksQuery,
  useUpdateBookmarkMutation,
  useUpdateBookmarksMutation,
} from './requests.generated';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import type { DragEndEvent } from '@dnd-kit/core/dist/types';

function SortableItem(props: { id: string; bookmark: BookmarkItemFragment }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex bg-opacity-90 bg-gray-700 text-white px-2 py-3 focus:bg-opacity-100  rounded-lg  "
    >
      <img
        className="w-6 h-6 mr-5"
        src={
          props.bookmark.faviconUrl
            ? props.bookmark.faviconUrl
            : `https://www.google.com/s2/favicons?domain=${props.bookmark.link}`
        }
        alt={`favicon`}
      />
      <div className="flex align-middle justify-between items-center w-full">
        {props.bookmark.displayName}
      </div>
    </div>
  );
}

const ReorderListContent = ({ data }: { data: BookmarkItemFragment[] }) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const [{ error }, updateBookmarks] = useUpdateBookmarksMutation();

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) {
      return;
    }

    if (active.id !== over.id) {
      const oldIndex = data.findIndex((item) => item.id === active.id);
      const newIndex = data.findIndex((item) => item.id === over.id);

      const newShape = arrayMove(data, oldIndex, newIndex);
      const finalShape = newShape.map((item, index) => ({
        ...item,
        position: index,
      }));

      updateBookmarks({ objects: finalShape });
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={data} strategy={verticalListSortingStrategy}>
        <div className="space-y-2 max-h-[300px] overflow-y-scroll">
          {data.map((item) => (
            <SortableItem key={item.id} id={item.id} bookmark={item} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

const ReorderListLoader = () => {
  const [{ data, error, fetching }] = useGetListOfBookmarksQuery();
  if (fetching) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (!data) {
    return <div>No data</div>;
  }
  return <ReorderListContent data={data.bookmarks} />;
};

export const ReorderList = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>
          <ArrowUpDown />
        </Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <ReorderListLoader />
      </Dialog.Content>
    </Dialog.Root>
  );
};
