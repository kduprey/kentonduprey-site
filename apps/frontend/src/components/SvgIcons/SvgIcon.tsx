interface SvgIconProps {
  iconName: "addContact" | "email" | "phone" | "website" | "work";
}

export const SvgIcon = ({ iconName }: SvgIconProps) => {
  switch (iconName) {
    case "phone":
      return (
        <svg
          fill="currentColor"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22 12A10.002 10.002 0 0012 2v2a8.003 8.003 0 017.391 4.938A8 8 0 0120 12h2zM2 10V5a1 1 0 011-1h5a1 1 0 011 1v4a1 1 0 01-1 1H6a8 8 0 008 8v-2a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1h-5C7.373 22 2 16.627 2 10z" />
          <path d="M17.543 9.704c.302.728.457 1.508.457 2.296h-1.8A4.199 4.199 0 0012 7.8V6a6 6 0 015.543 3.704z" />
        </svg>
      );
    case "email":
      return (
        <svg
          fill="currentColor"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M3.01 5.838a1 1 0 011-1H20a1 1 0 011 1v11.324a2 2 0 01-2 2H5a2 2 0 01-2-2v-11c0-.048.003-.094.01-.14v-.184zM5 8.062v9.1h14v-9.1l-4.879 4.879a3 3 0 01-4.242 0L5 8.06zm1.572-1.256h10.856l-4.72 4.72a1 1 0 01-1.415 0l-4.72-4.72z"
            fillRule="evenodd"
          />
        </svg>
      );
    case "work":
      return (
        <svg
          fill="currentColor"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M17 7a3 3 0 00-3-3h-4a3 3 0 00-3 3H6a3 3 0 00-3 3v8a3 3 0 003 3h12a3 3 0 003-3v-8a3 3 0 00-3-3h-1zm-3-1h-4a1 1 0 00-1 1h6a1 1 0 00-1-1zM6 9h12a1 1 0 011 1v8a1 1 0 01-1 1H6a1 1 0 01-1-1v-8a1 1 0 011-1z"
            fillRule="evenodd"
          />
        </svg>
      );
    case "website":
      return (
        <svg
          fill="currentColor"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M12 21a9 9 0 100-18 9 9 0 000 18zm2.806-2.585a7.004 7.004 0 004.175-5.89c-.823.449-1.861.817-3.044 1.073-.149 1.87-.554 3.54-1.131 4.817zM9.195 5.585a7.016 7.016 0 00-3.973 4.659c.232.22.626.49 1.226.757.45.2.973.379 1.557.529.054-2.324.498-4.415 1.19-5.945zm.906 8.326c.156 1.457.484 2.71.898 3.64.294.662.593 1.074.823 1.293.082.078.14.12.178.14a.983.983 0 00.178-.14c.23-.22.529-.63.823-1.292.414-.932.742-2.184.898-3.641a20.034 20.034 0 01-3.798 0zm-2.038-.313c.149 1.87.554 3.54 1.131 4.817a7.004 7.004 0 01-4.175-5.89c.823.449 1.861.817 3.044 1.073zM14 11.89c-.631.07-1.3.11-2 .11s-1.369-.04-2-.11c.014-2.226.423-4.145 1-5.442.293-.661.592-1.073.822-1.292a.988.988 0 01.178-.14.988.988 0 01.178.14c.23.22.529.63.823 1.292.576 1.297.986 3.216.999 5.442zm1.995-.36c-.053-2.324-.498-4.415-1.19-5.945a7.016 7.016 0 013.973 4.659c-.232.22-.626.49-1.226.757-.45.2-.973.379-1.557.529z"
            fillRule="evenodd"
          />
        </svg>
      );
    case "addContact":
      return (
        <svg
          fill="currentColor"
          height="30"
          viewBox="0 0 24 24"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M8 11a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 100-4 2 2 0 000 4z"
            fillRule="evenodd"
          />
          <path d="M11 14a1 1 0 011 1v6h2v-6a3 3 0 00-3-3H5a3 3 0 00-3 3v6h2v-6a1 1 0 011-1h6zM18 7h2v2h2v2h-2v2h-2v-2h-2V9h2V7z" />
        </svg>
      );
    default:
      return null;
  }
};
