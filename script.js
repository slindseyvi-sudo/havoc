const message = `if ever you look back, I hope you remember that I loved you sincerely, even when the truth about you broke me. I was always willing to stay, to understand, and to fight for us — even after the lies, even after the masks fell away. but love can’t be one-sided, it needs to be met halfway./n/nand please don’t forget — I’ll always be here for you, mahal. if one day you finally find yourself again, I hope you remember the promise you made, and you look for me. I want to see you, havoc — the real you. and if in the end I’m not the one you choose, please look for me still. it’s enough for me to know you’re happy, even if it’s not with me./n/nthis isn’t coming from bitterness, just acceptance. I still wish you the best, even if I won’t be part of your next chapter. I just hope that whoever you end up with will finally see the real you — the one I was trying so hard to reach beneath everything. I hope you let them in fully, in a way you couldn’t with me./n/nI love you. take care always.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
