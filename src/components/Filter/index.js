import React from 'react';
import Downshift from 'downshift';
import { Colors } from '@blueprintjs/core';

export default function({ onChange, items, placeholder, defaultItemSelected, itemToString }) {
  const renderItemLabel = item =>
    item.hasOwnProperty('title') ? item.title : item;
  return (
    <Downshift
      onChange={onChange}
      defaultItemSelected={defaultItemSelected}
      itemToString={itemToString}
    >
      {({
        getInputProps,
        getItemProps,
        isOpen,
        openMenu,
        inputValue,
        selectedItem,
        highlightedIndex
      }) => (
        <div>
          <input
            className="pt-input pt-large pt-fill"
            dir="auto"
            type="text"
            {...getInputProps({
              placeholder,
              onFocus: openMenu,
            })}
          />
          {isOpen ? (
            <ul className="pt-menu pt-large pt-elevation-0">
              {items && items
                .filter(
                  i =>
                    !inputValue ||
                    renderItemLabel(i)
                      .toLowerCase()
                      .includes(inputValue.toLowerCase())
                )
                .map((item, index) => (
                  <li
                    {...getItemProps({ item })} key={index}>
                    <a
                      className="pt-menu-item"
                      style={{
                        backgroundColor:
                          highlightedIndex === index
                            ? Colors.LIGHT_GRAY4
                            : Colors.WHITE
                      }}>
                      {renderItemLabel(item)}
                    </a>
                  </li>
                ))}
            </ul>
          ) : null}
        </div>
      )}
    </Downshift>
  );
}
