import { Cursor } from '../../src/types/Cursor';

describe('Cursor', () => {
  test('should have the correct value for each cursor type', () => {
    expect(Cursor.Alias).toBe('alias');
    expect(Cursor.AllScroll).toBe('all-scroll');
    expect(Cursor.Auto).toBe('auto');
    expect(Cursor.Cell).toBe('cell');
    expect(Cursor.ColResize).toBe('col-resize');
    expect(Cursor.ContextMenu).toBe('context-menu');
    expect(Cursor.Copy).toBe('copy');
    expect(Cursor.Default).toBe('default');
    expect(Cursor.EResize).toBe('e-resize');
    expect(Cursor.EwResize).toBe('ew-resize');
    expect(Cursor.Grab).toBe('grab');
    expect(Cursor.Grabbing).toBe('grabbing');
    expect(Cursor.Help).toBe('help');
    expect(Cursor.NotAllowed).toBe('not-allowed');
    expect(Cursor.NoDrop).toBe('no-drop');
    expect(Cursor.None).toBe('none');
    expect(Cursor.NResize).toBe('n-resize');
    expect(Cursor.NeResize).toBe('ne-resize');
    expect(Cursor.NeswResize).toBe('nesw-resize');
    expect(Cursor.NwResize).toBe('nw-resize');
    expect(Cursor.NwseResize).toBe('nwse-resize');
    expect(Cursor.Move).toBe('move');
    expect(Cursor.SResize).toBe('s-resize');
    expect(Cursor.SeResize).toBe('se-resize');
    expect(Cursor.SwResize).toBe('sw-resize');
    expect(Cursor.Text).toBe('text');
    expect(Cursor.VerticalText).toBe('vertical-text');
    expect(Cursor.Wait).toBe('wait');
    expect(Cursor.WResize).toBe('w-resize');
    expect(Cursor.ZoomIn).toBe('zoom-in');
    expect(Cursor.ZoomOut).toBe('zoom-out');
  });
});
