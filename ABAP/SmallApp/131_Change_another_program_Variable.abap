
    data:
  lf_text(40)   type c.

    LF_TEXT = '(SAPLZCODEPLOYMENT)IV_TEST1'.

    ASSIGN (LF_TEXT) TO FIELD-SYMBOL(<ss>).

    LF_TEXT = '(SAPLZCODEPLOYMENT)GT_GLOBAL'.

    ASSIGN (LF_TEXT) TO <ss>. " THIS CAN WORK