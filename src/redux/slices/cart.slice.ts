import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CartAddState {
	id: string | number;
	name: string;
	image: string;
	info: string;
}

export interface CartRemoveState {
	id: string | number;
}

const initialState: CartAddState[] = [];

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<CartAddState>): void => {
			const { id } = action.payload;
			if (
				state.length === 0 ||
				state.filter((item): boolean => item.id === id).length === 0
			) {
				state.push(action.payload);
			}
		},
		removeToCart: (state, action: PayloadAction<CartRemoveState>) => {
			const { id } = action.payload;
			if (state.some((item): boolean => item.id === id)) {
				return (state = state.filter((item): boolean => item.id !== id));
			}
		},
	},
});

export const { addToCart, removeToCart } = cartSlice.actions;
