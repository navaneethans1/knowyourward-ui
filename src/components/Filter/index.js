import React from "react";
import Component from "@reactions/component";
import Downshift from "downshift";
import { Colors } from "@blueprintjs/core";
import find from "lodash.find";

export default function({
  selectedItemID,
  items,
  placeholder,
  disabled,
  onChange,
  itemToString
}) {
  const renderItemLabel = item =>
    item.hasOwnProperty("title") ? item.title : item;

  const selectedItem = selectedItemID
    ? find(items, { id: selectedItemID })
    : null;

  return (
    <Component
      initialState={{ isDirty: false }}
      didUpdate={({ setState }) => {
        isDirty: false;
      }}
    >
      {({ state, setState }) => (
        <Downshift
          selectedItem={selectedItem}
          onChange={onChange}
          itemToString={itemToString}
        >
          {({
            getInputProps,
            getItemProps,
            isOpen,
            openMenu,
            inputValue,
            highlightedIndex
          }) => {
            return (
              <div>
                <input
                  className="pt-input pt-large pt-fill"
                  {...getInputProps({
                    dir: "auto",
                    type: "text",
                    placeholder,
                    onFocus: openMenu,
                    onKeyDown: () =>
                      !state.isDirty && setState({ isDirty: true }),
                    disabled
                  })}
                />
                {isOpen ? (
                  <ul className="pt-menu pt-large pt-elevation-0">
                    {items &&
                      items
                        .filter(
                          i =>
                            !state.isDirty ||
                            renderItemLabel(i)
                              .toLowerCase()
                              .includes(inputValue.toLowerCase())
                        )
                        .map((item, index) => (
                          <li {...getItemProps({ item })} key={index}>
                            <a
                              className="pt-menu-item"
                              style={{
                                backgroundColor:
                                  highlightedIndex === index
                                    ? Colors.LIGHT_GRAY4
                                    : Colors.WHITE
                              }}
                            >
                              {renderItemLabel(item)}
                            </a>
                          </li>
                        ))}
                  </ul>
                ) : null}
              </div>
            );
          }}
        </Downshift>
      )}
    </Component>
  );
}
