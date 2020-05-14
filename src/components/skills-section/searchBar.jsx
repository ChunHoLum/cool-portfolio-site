import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const SearchBar = (props) => {
  // constructor() {
  //   super();
  // }
  return (
    <>
      <Input
        size={props.size}
        className="searchbar"
        placeholder="Type to search the skills you are finding..."
        prefix={<SearchOutlined />}
        onChange={props.handleChange}
        onFocus={props.handleFocus}
        onBlur={props.handleBlur}
      />
    </>
  );

}

export default SearchBar;
