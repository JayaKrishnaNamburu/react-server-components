'use client'

import React from 'react';

const Repeater = (
  props
) => {
  const { items, renderItem, renderEmpty } = props;
  console.log(items)

  if ('data' in items && 'meta' in items) {
    const { data, meta } = items;
    if (data.length === 0) {
      return renderEmpty ? renderEmpty() : null;
    }
    return (
      <>
        {data.map((item, index) =>
          typeof item === 'object' ? renderItem({ ...item, teleportMeta: meta }, index) : renderItem(item, index)
        )}
      </>
    );
  }

  if (!Array.isArray(items)) {
    return
  }

  if (items.length === 0) {
    return renderEmpty ? renderEmpty() : null;
  }

  return (
    <>
      {(items).map((item, index) => renderItem(item, index))}
    </>
  );
};

export default Repeater;
