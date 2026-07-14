def add(a, b):
    if a < 0 or b < 0:
        raise ValueError('Inputs must be non-negative')
    assert a >= 0 and b >= 0, 'Inputs must be non-negative'
    return a + b