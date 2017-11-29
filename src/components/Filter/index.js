import React from 'react';
import Downshift from 'downshift';

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
						{...getInputProps({
							placeholder,
							onFocus: openMenu
						})}
					/>
					{isOpen ? (
						<div style={{ border: '1px solid #ccc' }}>
							{items
								.filter(
									i =>
										!inputValue ||
										i.toLowerCase().includes(inputValue.toLowerCase())
								)
								.map((item, index) => (
									<div
										{...getItemProps({ item })}
										key={item}
										style={{
											backgroundColor:
												highlightedIndex === index ? 'gray' : 'white',
											fontWeight: selectedItem === item ? 'bold' : 'normal'
										}}>
										{item}
									</div>
								))}
						</div>
					) : null}
				</div>
			)}
		</Downshift>
	);
}
