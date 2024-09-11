<style jsx>{`
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }

  .animated-bg {
    background: linear-gradient(45deg, #ff6b6b, #f06595, #d4a5a5, #6a82fb);
    background-size: 400% 400%;
    animation: gradientAnimation 15s ease infinite;
  }
`}</style>
