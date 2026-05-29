"use client";

import { Icon } from "./Icon";

type Props = {
  placeholder?: string;
  ariaLabel?: string;
  buttonLabel?: string;
};

export function SearchForm({
  placeholder = "Search…",
  ariaLabel = "Search",
  buttonLabel = "Search",
}: Props) {
  return (
    <form className="search" role="search" onSubmit={(e) => e.preventDefault()}>
      <Icon name="search" size={20} />
      <input type="search" placeholder={placeholder} aria-label={ariaLabel} />
      <button className="btn btn--sm" type="submit">{buttonLabel}</button>
    </form>
  );
}
