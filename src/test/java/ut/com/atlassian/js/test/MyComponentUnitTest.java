package ut.com.atlassian.js.test;

import org.junit.Test;
import com.atlassian.js.test.api.MyPluginComponent;
import com.atlassian.js.test.impl.MyPluginComponentImpl;

import static org.junit.Assert.assertEquals;

public class MyComponentUnitTest
{
    @Test
    public void testMyName()
    {
        MyPluginComponent component = new MyPluginComponentImpl(null);
        assertEquals("names do not match!", "myComponent",component.getName());
    }
}