function WhatsappButton() {
    return (
      <a
        href="https://api.whatsapp.com/send?phone=244922347330&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20seu%20servi%C3%A7o."
        target="_blank"
        rel="noopener noreferrer"
        style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#25D366',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
            zIndex: 10000,
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 32 32"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.001 3.2c-7.05 0-12.8 5.75-12.8 12.8 0 2.255.595 4.434 1.727 6.35L3.2 28.8l6.672-1.745a12.736 12.736 0 0 0 6.13 1.562h.001c7.05 0 12.8-5.75 12.8-12.8s-5.75-12.8-12.8-12.8zm0 23.2c-1.87 0-3.694-.498-5.292-1.44l-.378-.224-3.96 1.035 1.057-3.856-.245-.396A10.78 10.78 0 0 1 5.6 16c0-5.74 4.66-10.4 10.4-10.4s10.4 4.66 10.4 10.4-4.66 10.4-10.4 10.4zm5.635-7.783c-.308-.154-1.82-.895-2.102-.996-.282-.1-.487-.154-.692.155-.205.308-.795.996-.975 1.201-.18.205-.36.231-.668.077-.308-.154-1.3-.479-2.475-1.526-.915-.816-1.533-1.826-1.714-2.134-.18-.308-.02-.475.134-.63.137-.137.308-.36.462-.539.154-.18.205-.308.308-.513.103-.205.051-.385-.026-.539-.077-.154-.692-1.67-.949-2.29-.25-.598-.505-.517-.692-.527-.18-.008-.385-.01-.59-.01a1.14 1.14 0 0 0-.827.385c-.282.308-1.077 1.053-1.077 2.567 0 1.513 1.102 2.975 1.256 3.18.154.205 2.17 3.314 5.258 4.643.735.317 1.31.505 1.758.646.738.235 1.41.202 1.94.123.592-.088 1.82-.745 2.078-1.464.257-.718.257-1.33.18-1.464-.077-.133-.282-.205-.59-.359z" />
        </svg>
      </a>
    );
  }
  
  export default WhatsappButton;
  