import { useNavigationMethods } from '@/hooks';

export const GoBackButton = () => {
  const { goBack } = useNavigationMethods();
  return (
    <button
      onClick={goBack}
      style={{
        display: 'flex',
        alignItems: 'center',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
      }}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15 18L9 12L15 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span style={{ marginLeft: '8px' }}>Go Back</span>
    </button>
  );
};
