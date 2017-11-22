import React from 'react';
import Downshift from 'downshift';

export default function({ onChange, items }) {
	return (
		<Downshift onChange={onChange}>
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
							placeholder: 'Filter by a choice',
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
										}}
									>
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
