import React from 'react';
import Downshift from 'downshift';
import { Colors } from '@blueprintjs/core';

export default function({ onChange, items, placeholder, defaultItemSelected }) {
	return (
		<Downshift onChange={onChange} defaultItemSelected={defaultItemSelected}>
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
						onKeyPress={e => console.log(e.which)}
						className="pt-input pt-large pt-fill"
						dir="auto"
						type="text"
						{...getInputProps({
							placeholder,
							onFocus: openMenu
						})}
					/>
					{isOpen ? (
						<ul className="pt-menu pt-large pt-elevation-1">
							{items
								.filter(
									i =>
										!inputValue ||
										i.toLowerCase().includes(inputValue.toLowerCase())
								)
								.map((item, index) => (
									<li {...getItemProps({ item })} key={item}>
										<a
											className="pt-menu-item"
											style={{
												backgroundColor:
													highlightedIndex === index
														? Colors.LIGHT_GRAY4
														: Colors.WHITE
											}}>
											{item}
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
