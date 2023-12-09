"use client";

import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import { Color, Size } from "@/types";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import Filter from "./filter";

interface MobileProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: React.FC<MobileProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>

      <Dialog
        open={open}
        onClick={onOpen}
        className="flex items-center gap-x-2 lg:hidden"
        onClose={onClose}>
        <div className="fixed inset-0 bg-black bg-opacity-25">
          <div className="fixed inset-0 z-40 flex">
            <Dialog.Panel
              className="relative ml-auto bg-white flex w-full h-full max-w-xs flex-col
                        overflow-y-auto py-4 px-4 shadow-xl">
              <div className="flex items-center justify-end px-4">
                <IconButton icon={<X size={15} onClick={onClose} />} />
              </div>
              <Filter valueKey="sizeId" name="sizes" data={sizes} />
              <Filter valueKey="colorId" name="colors" data={colors} />
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
