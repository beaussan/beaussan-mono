import { Input, TextArea } from '../../components/Input';
import { DropList } from '../../components/DropList';
import { Button } from '../../components/Button';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { useFormikContext } from 'formik';
import { CodeLangField } from '../../components/CodeLangField';
import { MinusIcon } from '@heroicons/react/outline';

const CodeSpecificInputs: React.FC<{ baseName: string }> = ({ baseName }) => {
  return (
    <div>
      <CodeLangField label="Lang of code" name={`${baseName}.meta.lang`} />
    </div>
  );
};

const extraInupts: { [key: string]: React.FC<{ baseName: string }> } = {
  CODE: CodeSpecificInputs,
};

export const YieldInput: React.FC<{
  baseName: string;
  index: number;
  yieldTypes: string[];
  remove?: Function;
}> = ({ yieldTypes, baseName, remove, index }) => {
  const { getFieldProps } = useFormikContext<any>();
  const { value } = getFieldProps(`${baseName}.method`);
  const Extra = extraInupts[value];

  return (
    <div className="flex flex-col justify-between items-start bg-indigo-50 rounded-lg p-3 shadow">
      <div className="flex w-full justify-between mb-5">
        <div className="flex-1 font-bold text-xl">Yield {index + 1}</div>
        {remove && (
          <Button
            className="self-start"
            onClick={() => remove()}
            Icon={MinusIcon}
            variant="ghost"
          />
        )}
      </div>
      <div className="flex justify-between w-full mb-5">
        <div className="flex-1">
          <Input label="Name" type="text" name={`${baseName}.name`} />
        </div>
        <div className="w-40 ml-4">
          <DropList
            label="Kind of yield"
            name={`${baseName}.method`}
            values={yieldTypes}
          />
        </div>
      </div>

      <div className="flex-1 flex w-full">
        <TextArea
          label="Description (markdown allowed)"
          className=""
          type="text"
          name={`${baseName}.description`}
        />
        <AnimatePresence>
          {Extra && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="ml-4"
              variants={{
                hidden: { width: 0 },
                visible: { width: 'auto' },
              }}
              transition={{ duration: 0.275 }}
            >
              <Extra baseName={baseName} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
