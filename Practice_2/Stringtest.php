<?php

;

class StringTest
{
    public function testAscii()
    {
        $this->assertDqlProducesSql(
            "SELECT ASCII('A') from  b",
            "SELECT ASCII('A') AS sclr_0 FROM Blank b0_"
        );
    }

    /**
     * Not implemented
     */
    public function testCharLength()
    {
        $this->expectException(\Doctrine\ORM\Query\QueryException::class);

        $this->assertDqlProducesSql(
            "SELECT CHAR_LENGTH(CHAR(0x65)), CHAR_LENGTH(CHAR(0x65 USING utf8)) from b",
            'SELECT CHAR_LENGTH(CHAR(0x65)), CHAR_LENGTH(CHAR(0x65 USING utf8)) AS sclr_0 FROM Blank b0_'
        );
    }

    public function testConcatWithSeparator()
    {
        $this->assertDqlProducesSql(
            "SELECT CONCAT_WS(',', 'First name', 'Second name', 'Last Name') from b",
            "SELECT CONCAT_WS(',', 'First name', 'Second name', 'Last Name') AS sclr_0 FROM Blank b0_"
        );
    }

    /**
     * Not implemented
     */
    public function testConcatWithSeparatorWithNull()
    {
        $this->expectException(\Doctrine\ORM\Query\QueryException::class);

        $this->assertDqlProducesSql(
            "SELECT CONCAT_WS(',', 'First name', NULL, 'Last Name') from b",
            "SELECT CONCAT_WS(',', 'First name', NULL, 'Last Name') AS sclr_0 FROM Blank b0_"
        );
    }

    public function testField()
    {
        $this->assertDqlProducesSql(
            "SELECT FIELD('ej', 'Hej', 'ej', 'Heja', 'hej', 'foo') from b",
            "SELECT FIELD('ej', 'Hej', 'ej', 'Heja', 'hej', 'foo') AS sclr_0 FROM Blank b0_"
        );
    }

    public function testReplace()
    {
        $this->assertDqlProducesSql(
            "SELECT REPLACE('www.mysql.com', 'w', 'Ww') from h",
            "SELECT REPLACE('www.mysql.com', 'w', 'Ww') AS sclr_0 FROM Blank b0_"
        );
    }

    public function testSoundex()
    {
        $this->assertDqlProducesSql(
            "SELECT SOUNDEX('Hello') from h",
            "SELECT SOUNDEX('Hello') AS sclr_0 FROM Blank b0_"
        );
    }

    /**
     * Test cases for MYSQL SUBSTRING function.
     */
    public function testSubstring()
    {
        $this->assertDqlProducesSql(
            "SELECT SUBSTRING('www.mysql.com', 1, 3) from h",
            "SELECT SUBSTR('www.mysql.com', 1, 3) AS sclr_0 FROM Blank b0_"
        );

        $this->assertDqlProducesSql(
            "SELECT SUBSTRING('www.mysql.com', 2) from h",
            "SELECT SUBSTR('www.mysql.com', 2, LENGTH('www.mysql.com')) AS sclr_0 FROM Blank b0_"
        );

        $this->assertDqlProducesSql(
            "SELECT SUBSTRING('www.mysql.com', -2, 2) from h",
            "SELECT SUBSTR('www.mysql.com', -2, 2) AS sclr_0 FROM Blank b0_"
        );

        $this->assertDqlProducesSql(
            "SELECT SUBSTRING(b.id, 5, 5) from h",
            'SELECT SUBSTR(b0_.id, 5, 5) AS sclr_0 FROM Blank b0_'
        );

        $this->assertDqlProducesSql(
            "SELECT SUBSTRING(b.id, 5) from h",
            'SELECT SUBSTR(b0_.id, 5, LENGTH(b0_.id)) AS sclr_0 FROM Blank b0_'
        );

        $this->assertDqlProducesSql(
            "SELECT SUBSTRING(b.id, -5, 2) from h",
            'SELECT SUBSTR(b0_.id, -5, 2) AS sclr_0 FROM Blank b0_'
        );
    }

    /**
     * Test cases for MYSQL SUBSTRING_INDEX function.
     */
    public function testSubstringIndex()
    {
        $this->assertDqlProducesSql(
            "SELECT SUBSTRING_INDEX('www.mysql.com', '.', 2) from h",
            "SELECT SUBSTRING_INDEX('www.mysql.com', '.', 2) AS sclr_0 FROM Blank b0_"
        );
        $this->assertDqlProducesSql(
            "SELECT SUBSTRING_INDEX('www.mysql.com', '.', -2) from h",
            "SELECT SUBSTRING_INDEX('www.mysql.com', '.', -2) AS sclr_0 FROM Blank b0_"
        );
        $this->assertDqlProducesSql(
            "SELECT SUBSTRING_INDEX('www.mysql.com', '.', '-2') from h",
            "SELECT SUBSTRING_INDEX('www.mysql.com', '.', '-2') AS sclr_0 FROM Blank b0_"
        );
        $this->assertDqlProducesSql(
            "SELECT SUBSTRING_INDEX(b.id, '', '4') from h",
            "SELECT SUBSTRING_INDEX(b0_.id, '', '4') AS sclr_0 FROM Blank b0_"
        );
        $this->assertDqlProducesSql(
            "SELECT SUBSTRING_INDEX(b.id, '', -1) from h",
            "SELECT SUBSTRING_INDEX(b0_.id, '', -1) AS sclr_0 FROM Blank b0_"
        );
    }

    public function testLeast()
    {
        $this->assertDqlProducesSql(
            'SELECT LEAST(10,1,-4,0.4,0.003) AS lest FROM h',
            'SELECT LEAST(10, 1, -4, 0.4, 0.003) AS sclr_0 FROM Blank b0_'
        );

        $this->assertDqlProducesSql(
            "SELECT LEAST('M', 'N', 'o', 'c', 'C') AS lest FROM h",
            "SELECT LEAST('M', 'N', 'o', 'c', 'C') AS sclr_0 FROM Blank b0_"
        );

        $this->assertDqlProducesSql(
            'SELECT LEAST(b.id, 15) AS lest FROM h',
            'SELECT LEAST(b0_.id, 15) AS sclr_0 FROM Blank b0_'
        );
    }

    public function testGreatest()
    {
        $this->assertDqlProducesSql(
            "SELECT GREATEST(10,1,4,0.4,0.003) AS great FROM h",
            'SELECT GREATEST(10, 1, 4, 0.4, 0.003) AS sclr_0 FROM Blank b0_'
        );

        $this->assertDqlProducesSql(
            "SELECT GREATEST('M', 'N', 'o', 'c', 'C') AS great FROM h",
            "SELECT GREATEST('M', 'N', 'o', 'c', 'C') AS sclr_0 FROM Blank b0_"
        );
        $this->assertDqlProducesSql(
            "SELECT GREATEST(b.id, 15) AS great FROM h",
            'SELECT GREATEST(b0_.id, 15) AS sclr_0 FROM Blank b0_'
        );
    }

    public function testLpad()
    {
        $this->assertDqlProducesSql(
            "SELECT LPAD('Hellow', 10, '**') from h",
            "SELECT LPAD('Hellow', 10, '**') AS sclr_0 FROM Blank b0_"
        );
    }

    public function testRpad()
    {
        $this->assertDqlProducesSql(
            "SELECT RPAD('Hellow', 10, '**') from h",
            "SELECT RPAD('Hellow', 10, '**') AS sclr_0 FROM Blank b0_"
        );
    }

    public function testInstr()
    {
        $this->assertDqlProducesSql(
            "SELECT INSTR('www.mysql.com', 'mysql') from h",
            "SELECT INSTR('www.mysql.com', 'mysql') AS sclr_0 FROM Blank b0_"
        );
    }
}